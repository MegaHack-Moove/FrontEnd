import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExercicePage } from './start-exercice.page';

describe('StartExercicePage', () => {
  let component: StartExercicePage;
  let fixture: ComponentFixture<StartExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
