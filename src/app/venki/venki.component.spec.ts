import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkiComponent } from './venki.component';

describe('VenkiComponent', () => {
  let component: VenkiComponent;
  let fixture: ComponentFixture<VenkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
