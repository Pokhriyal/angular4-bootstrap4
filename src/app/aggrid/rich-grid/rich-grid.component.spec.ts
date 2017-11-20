import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichGridComponent } from './rich-grid.component';

describe('RichGridComponent', () => {
  let component: RichGridComponent;
  let fixture: ComponentFixture<RichGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
