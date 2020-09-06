import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
    saveCanvas: any;
    canvas: any;
    savectx: any;
    ctx: any
    gameState: any;
    x: number;
    y: number


    //Clothing type (closet) arrays

    closetHair = [];
    closetFace = [];
    closetAccessories = [];
    closetTop = [];
    closetBottoms = [];
    closetShoes = [];
    currentCloset: any;

    mouse = [this.x, this.y]

    fullCloset = [this.closetShoes, this.closetBottoms, this.closetTop, this.closetFace, this.closetHair, this.closetAccessories];

    //Current outfit - images to be drawn
    currentOutfit = [];
    dollToneRefs = [];
    dollTones = [];
    dollImgRef;
    currentPage;

    imgWidth = 350; // Dimensions of doll image
    imgHeight = 600;

  constructor() { }

  ngOnInit() {
    console.log('init called');
    window.requestAnimationFrame(this.update);
    
    this.canvas = document.getElementById("paintboard");
    this.ctx = this.canvas.getContext("2d");

    //initialize hidden saving canvas
    this.saveCanvas = document.createElement('canvas');
    this.saveCanvas.style.display = 'none';
    document.body.appendChild(this.saveCanvas);
    this.saveCanvas.width = this.imgWidth;
    this.saveCanvas.height = this.imgHeight;
    
    this.savectx = this.saveCanvas.getContext('2d');
    
    this.gameState = "start";
        
    //hook up closet buttons and mouse click
    this.hookUp();
    this.canvas.onmousedown = this.mouseClick; //one function remmenber alter
    window.onblur = function(){
        this.gameState = "pause";
    }
    window.onfocus = function(){
        if(this.gameState != "start"){
            this.gameState = "main loop";
            requestAnimationFrame(this.update);
            this.refreshCloset();
        }
    }
    
    //generate images and populate arrays
    this.dollToneRefs.push("../assets/Abacate-relax.png"); 
    // this.dollToneRefs.push("../assets/BaseLight.png");
    // this.dollToneRefs.push("../assets/BaseLight.png"); 
    // this.dollToneRefs.push("../assets/BaseLight.png");
    this.fillCloset();
    this.genImageTags();
    this.currentCloset = this.closetBottoms;
    this.currentPage = 0;
    
    //draw doll once
    this.dressDoll();
    this.beginNull();
    this.refreshCloset();
    
     //clear closet area
    this.ctx.save();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(350,0, 800,600);
    this.ctx.restore();
    this.ctx.save();
    this.ctx.fillStyle = "#336699";
    this.ctx.font = "20px calibri";
    this.ctx.fillText("Choose a clothing type below to begin", 380, 100);
    this.ctx.restore();
  }

  update(){
    var updoot = requestAnimationFrame(this.update);
    this.ctx.save();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0,0, 350,600);
    this.ctx.restore();
    
    //Gamestate loop
    
    //Begin
    if(this.gameState == "start"){
        this.dressDoll();
        this.ctx.save();
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(350,0, 800,600);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.fillStyle = "#336699";
        this.ctx.font = "20px calibri";
        this.ctx.fillText("Choose a clothing type below to begin", 380, 100);
        this.ctx.restore();
    }
    
    //Main
    if(this.gameState == "main loop"){
      this.dressDoll();
    }
    
    //pause
    if(this.gameState == "pause"){
      this.dressDoll();
        
      this.ctx.save();
      this.ctx.globalAlpha = 0.5;
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0,0,800,600);
      this.ctx.restore();
      this.ctx.save();
      this.ctx.fillStyle = "#336699";
      this.ctx.font = "20px calibri";
      this.ctx.fillText("-- Paused --", 360, 300);
      this.ctx.restore();
        
        
        window.cancelAnimationFrame(updoot);
    }
}

  dressDoll(){
    //console.log('dress doll called');
    this.ctx.drawImage(this.dollImgRef, -35,0);
    
    //check clothes for active status and draw them
    //this is really heavy; an active array would probably be smarter lol
    for(var i=0; i < this.currentOutfit.length; i++){
      this.currentOutfit[i].drawDressed(this.ctx);
    }
  }

  mouseClick(e){
    var mousePos = this.getMouse(e);
    console.log('clicko!');
    
    if(this.gameState == "start"){
     this.gameState = "main loop";   
    }
    
    //check for clicks on the clothes
    for(var i = this.currentPage*16; i < this.currentCloset.length && i < (this.currentPage + 1) * 16; i++){
        console.log('checked click on ' + this.currentCloset.toString() + ' and element ' + this.currentCloset[i]);
        this.currentCloset[i].isClick(mousePos, this.ctx);   
    }    
    
    //relist the current outfit for drawing
    this.activateNextClothes(mousePos);
  }

  getMouse(e){

    this.mouse[0] = e.pageX - e.target.offsetLeft;
    this.mouse[1] = e.pageY - e.target.offsetTop;
    return this.mouse;
    }

  hookUp(){
    //Check for Closet Swaps
    // document.querySelector('#hairBtn').onclick = function(){
    //     this.swapCloset("Hair");
    // };
    // document.querySelector('#faceBtn').onclick = function(){
    //     this.swapCloset("Face");
    // };
    // document.querySelector('#accessBtn').onclick = function(){
    //     this.swapCloset("Access");
    // }; 
    // document.querySelector('#topsBtn').onclick = function(){
    //     this.swapCloset("Top");
    // };
    // document.querySelector('#bottomsBtn').onclick = function(){
    //     this.swapCloset("Bottoms");
    // };
    // document.querySelector('#shoesBtn').onclick = function(){
    //     this.swapCloset("Shoes");
    // };
    
    // //Check for page swaps
    
    // //check for skintone swaps
    // document.querySelector('#lightskin').onclick = function(){
    //     this.swapCloset("light");   
    // }
    // document.querySelector('#midskin').onclick = function(){
    //     this.swapCloset("mid");   
    // }
    // const exemple: HTMLElement = document.querySelector('#medskin').onclick as HTMLElement = this.swapCloset("med");   
  
    // document.querySelector('#darkskin').onclick = function(){
    //     this.swapCloset("dark");   
    // }
  }

  swapCloset(whichButton) {
    console.log('Swapped to ' + whichButton + ' closet');
    
    if(this.gameState == "start"){
      this.gameState = "main loop";   
    }
    
    this.currentPage = 0;
    
    switch(whichButton){
        case "Hair":
          this.currentCloset = this.closetHair;
            break;
        case "Face":
          this.currentCloset = this.closetFace;
            break;
        case "Access":
            this.currentCloset = this.closetAccessories;
            break;
        case "Top":
            this.currentCloset = this.closetTop;
            break;
        case "Bottoms":
            this.currentCloset = this.closetBottoms;
            break;
        case "Shoes":
          this.currentCloset = this.closetShoes;
            break;
        case "light":
          this.dollImgRef = this.dollTones[0];
            break;
        case "mid":
          this.dollImgRef = this.dollTones[1];
            break;
        case "med":
          this.dollImgRef = this.dollTones[2];
            break;
        case "dark":
          this.dollImgRef = this.dollTones[3];
            break;
        default:
          this.currentCloset = this.closetHair;
    }
    
    this.refreshCloset();
  }

  fillCloset(){
    // var arrayIndex = 0;
    
    // //for all the keys in oLoader file, grab array and populate closets
    // for (var key in oLoader){
    //     var keyArray = oLoader[key];
        
        
    //     for(var i=0; i < keyArray.length; i++){
    //         var articleCreate = new Article(keyArray[i], i);
            
    //         this.fullCloset[arrayIndex].push(articleCreate);
    //     }
        
    //     arrayIndex ++;
    // }
    
    // //load current outfit as naked
    // for(var i=0; i < this.fullCloset.length; i++){
    //     this.currentOutfit.push(this.fullCloset[i][0]);
    // }
  }

  genImageTags(){
    var loaderDiv = document.getElementById("loader");
    
    //add dolls to the loader
    for(var i=0; i < this.dollToneRefs.length; i++){
        var node = document.createElement("img");
        node.setAttribute("src", this.dollToneRefs[i]);
        loaderDiv.appendChild(node);
        this.dollTones.push(node);
    }
        
    this.dollImgRef = this.dollTones[1];
    
    //add clothes to the loader
    for(var e=0; e < this.fullCloset.length; e++){
        for(var i=0; i < this.fullCloset[e].length; i++){
            
            this.fullCloset[e][i].loadImgTag(loaderDiv);
            
        }
    }
  }

  beginNull(){
    this.closetHair[0].activate();
    this.closetFace[0].activate();
    this.closetAccessories[0].activate();
    this.closetTop[0].activate();
    this.closetBottoms[0].activate();
    this.closetShoes[0].activate();
  }

  refreshCloset(){
    //clear closet area
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(350,0, 800,600);
    
    //draw the current clothes
    for(var i= this.currentPage*16; i < this.currentCloset.length && i < (this.currentPage+1) * 16; i++){
        this.currentCloset[i].drawPreview(this.ctx);   
    }
}

activateNextClothes(mousePos){
  //check for click in closet area
  if(mousePos.x > 350){

      //deactivate former outfit piece based on active closet
      for(var i=0; i < this.currentCloset.length; i++){
          this.currentCloset[i].deactivate();
      }

      //reactivate click (or save the misclick, as it were)
      for(var i=0; i < this.currentCloset.length; i++){
          if(this.currentCloset[i].isNext() == true){
                this.currentCloset[i].activate();
          }
      }
      
      //clear active array
      this.currentOutfit = [];
      
      //load the active clothes for each category
      for(var e=0; e < this.fullCloset.length; e++){
          for(var i=0; i < this.fullCloset[e].length; i++){

              if(this.fullCloset[e][i].isActive()){
                  this.currentOutfit.push(this.fullCloset[e][i]);
              }

          }
      }
      
  } //end area check
  
  this.refreshCloset();
}
}
