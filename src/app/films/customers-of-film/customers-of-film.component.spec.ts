import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOfFilmComponent } from './customers-of-film.component';

describe('CustomersOfFilmComponent', () => {
  let component: CustomersOfFilmComponent;
  let fixture: ComponentFixture<CustomersOfFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersOfFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOfFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
