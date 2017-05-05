import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 404pageComponent } from './404page.component';

describe('404pageComponent', () => {
  let component: 404pageComponent;
  let fixture: ComponentFixture<404pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 404pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
