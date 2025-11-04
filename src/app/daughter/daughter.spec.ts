import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daughter } from './daughter';

describe('Daughter', () => {
  let component: Daughter;
  let fixture: ComponentFixture<Daughter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Daughter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Daughter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
