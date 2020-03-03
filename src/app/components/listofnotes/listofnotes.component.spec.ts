import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofnotesComponent } from './listofnotes.component';

describe('ListofnotesComponent', () => {
  let component: ListofnotesComponent;
  let fixture: ComponentFixture<ListofnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
