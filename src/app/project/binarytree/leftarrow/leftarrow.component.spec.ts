import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftarrowComponent } from './leftarrow.component';

describe('LeftarrowComponent', () => {
  let component: LeftarrowComponent;
  let fixture: ComponentFixture<LeftarrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftarrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
