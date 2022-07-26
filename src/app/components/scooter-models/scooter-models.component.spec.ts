import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterModelsComponent } from './scooter-models.component';

describe('ScooterModelsComponent', () => {
  let component: ScooterModelsComponent;
  let fixture: ComponentFixture<ScooterModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
