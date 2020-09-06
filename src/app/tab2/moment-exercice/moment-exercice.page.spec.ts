import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MomentExercicePage } from './moment-exercice.page';

describe('MomentExercicePage', () => {
  let component: MomentExercicePage;
  let fixture: ComponentFixture<MomentExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MomentExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
