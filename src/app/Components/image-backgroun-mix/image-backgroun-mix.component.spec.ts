import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBackgrounMixComponent } from './image-backgroun-mix.component';

describe('ImageBackgrounMixComponent', () => {
  let component: ImageBackgrounMixComponent;
  let fixture: ComponentFixture<ImageBackgrounMixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBackgrounMixComponent]
    });
    fixture = TestBed.createComponent(ImageBackgrounMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
