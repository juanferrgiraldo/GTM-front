import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thttp1Component } from './thttp1.component';

describe('Thttp1Component', () => {
  let component: Thttp1Component;
  let fixture: ComponentFixture<Thttp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thttp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thttp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
