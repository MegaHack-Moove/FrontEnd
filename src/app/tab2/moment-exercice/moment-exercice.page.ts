import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moment-exercice',
  templateUrl: './moment-exercice.page.html',
  styleUrls: ['./moment-exercice.page.scss'],
})
export class MomentExercicePage implements OnInit {

  timeLeft: number = 60;
  interval;
  onAudio: boolean;
  audio = new Audio();

  constructor() { }

  ngOnInit() {
    this.onAudio = false;
    console.log(this.onAudio)
  }

  startTimer() {
    this.playAudio();
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000)
  }

   pauseTimer() {
     this.stopAudio();
     clearInterval(this.interval);
   } 

   playAudio(){
        this.audio.src = "../../../assets/music/bubblegum-k-k-remix.mp3";
        this.audio.load();
        this.audio.play(); 
        this.onAudio = true;
   }

   stopAudio(){
    this.audio.pause();
    this.onAudio = false;
   }
}