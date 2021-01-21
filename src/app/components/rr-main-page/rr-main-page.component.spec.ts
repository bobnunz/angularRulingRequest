import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrMainPageComponent } from './rr-main-page.component';

describe('RrMainPageComponent', () => {
  let component: RrMainPageComponent;
  let fixture: ComponentFixture<RrMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
