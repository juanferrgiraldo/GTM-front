import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thttp2Component } from './thttp2.component';

describe('Thttp2Component', () => {
  let component: Thttp2Component;
  let fixture: ComponentFixture<Thttp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thttp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thttp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
