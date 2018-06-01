import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http1.1Component } from './http1.1.component';

describe('Http1.1Component', () => {
  let component: Http1.1Component;
  let fixture: ComponentFixture<Http1.1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http1.1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http1.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
