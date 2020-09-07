import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpExercicePage } from './help-exercice.page';

describe('HelpExercicePage', () => {
  let component: HelpExercicePage;
  let fixture: ComponentFixture<HelpExercicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpExercicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpExercicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
