import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudwigEffectComponent } from './ludwig-effect.component';

describe('LudwigEffectComponent', () => {
  let component: LudwigEffectComponent;
  let fixture: ComponentFixture<LudwigEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LudwigEffectComponent]
    });
    fixture = TestBed.createComponent(LudwigEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
