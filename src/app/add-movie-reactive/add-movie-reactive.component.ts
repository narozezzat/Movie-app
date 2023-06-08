import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-movie-reactive',
  templateUrl: './add-movie-reactive.component.html',
  styleUrls: ['./add-movie-reactive.component.css'],
})
export class AddMovieReactiveComponent {
  movieForm !: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.movieForm = new FormGroup({
    //   movieName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   overview: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(200),
    //   ]),
    // });
  }

  ngOnInit() {
    this.movieForm = this.fb.group({
      movieName: ['', [Validators.required, Validators.minLength(3)]],
      overview: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  submitForm() {
    console.log(this.movieForm);
  }
}
