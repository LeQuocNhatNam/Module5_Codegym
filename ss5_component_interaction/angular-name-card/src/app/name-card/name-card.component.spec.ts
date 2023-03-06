import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamCardComponent } from './name-card.component';

describe('NamCardComponent', () => {
  let component: NamCardComponent;
  let fixture: ComponentFixture<NamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
