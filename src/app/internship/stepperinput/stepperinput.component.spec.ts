import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperinputComponent } from './stepperinput.component';

describe('StepperinputComponent', () => {
  let component: StepperinputComponent;
  let fixture: ComponentFixture<StepperinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
