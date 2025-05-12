import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyplatyComponent } from './wyplaty.component';

describe('WyplatyComponent', () => {
  let component: WyplatyComponent;
  let fixture: ComponentFixture<WyplatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WyplatyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyplatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
