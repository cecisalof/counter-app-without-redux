import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandDaughter } from './grand-daughter';

describe('GrandDaughter', () => {
  let component: GrandDaughter;
  let fixture: ComponentFixture<GrandDaughter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandDaughter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandDaughter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
