import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingChildParentComponent } from './data-sharing-child-parent.component';

describe('DataSharingChildParentComponent', () => {
  let component: DataSharingChildParentComponent;
  let fixture: ComponentFixture<DataSharingChildParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingChildParentComponent]
    });
    fixture = TestBed.createComponent(DataSharingChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
