import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'thriller-movies',
  templateUrl: './thriller-movies.component.html',
  styleUrls: ['./thriller-movies.component.css']
})
export class ThrillerMoviesComponent {
  @Input() thrillerMovieResult:Movie[] = [];
}
