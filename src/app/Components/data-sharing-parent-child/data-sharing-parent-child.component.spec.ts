import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingParentChildComponent } from './data-sharing-parent-child.component';

describe('DataSharingParentChildComponent', () => {
  let component: DataSharingParentChildComponent;
  let fixture: ComponentFixture<DataSharingParentChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingParentChildComponent]
    });
    fixture = TestBed.createComponent(DataSharingParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
