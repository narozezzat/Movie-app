import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieReactiveComponent } from './add-movie-reactive.component';

describe('AddMovieReactiveComponent', () => {
  let component: AddMovieReactiveComponent;
  let fixture: ComponentFixture<AddMovieReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMovieReactiveComponent]
    });
    fixture = TestBed.createComponent(AddMovieReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
