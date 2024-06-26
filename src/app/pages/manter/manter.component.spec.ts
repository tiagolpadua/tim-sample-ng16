import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterComponent } from './manter.component';

describe('ManterComponent', () => {
  let component: ManterComponent;
  let fixture: ComponentFixture<ManterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManterComponent]
    });
    fixture = TestBed.createComponent(ManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
