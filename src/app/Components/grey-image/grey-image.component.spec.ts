import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyImageComponent } from './grey-image.component';

describe('GreyImageComponent', () => {
  let component: GreyImageComponent;
  let fixture: ComponentFixture<GreyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreyImageComponent]
    });
    fixture = TestBed.createComponent(GreyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
