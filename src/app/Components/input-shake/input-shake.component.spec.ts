import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShakeComponent } from './input-shake.component';

describe('InputShakeComponent', () => {
  let component: InputShakeComponent;
  let fixture: ComponentFixture<InputShakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputShakeComponent]
    });
    fixture = TestBed.createComponent(InputShakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
