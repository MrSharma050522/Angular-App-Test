import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowAnimationComponent } from './box-shadow-animation.component';

describe('BoxShadowAnimationComponent', () => {
  let component: BoxShadowAnimationComponent;
  let fixture: ComponentFixture<BoxShadowAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxShadowAnimationComponent]
    });
    fixture = TestBed.createComponent(BoxShadowAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
