import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScooterModelComponent } from './create-scooter-model.component';

describe('CreateScooterModelComponent', () => {
  let component: CreateScooterModelComponent;
  let fixture: ComponentFixture<CreateScooterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScooterModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScooterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
