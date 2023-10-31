import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'documentary-movies',
  templateUrl: './documentary-movies.component.html',
  styleUrls: ['./documentary-movies.component.css']
})
export class DocumentaryMoviesComponent {
  @Input() documentaryMovieResult:Movie[] = [];
}
