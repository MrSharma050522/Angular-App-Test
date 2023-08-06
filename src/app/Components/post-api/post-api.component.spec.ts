import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiComponent } from './post-api.component';

describe('PostApiComponent', () => {
  let component: PostApiComponent;
  let fixture: ComponentFixture<PostApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostApiComponent]
    });
    fixture = TestBed.createComponent(PostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
