import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightarrowComponent } from './rightarrow.component';

describe('RightarrowComponent', () => {
  let component: RightarrowComponent;
  let fixture: ComponentFixture<RightarrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightarrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
