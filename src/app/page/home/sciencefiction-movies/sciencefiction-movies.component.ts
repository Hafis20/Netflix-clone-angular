import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'sciencefiction-movies',
  templateUrl: './sciencefiction-movies.component.html',
  styleUrls: ['./sciencefiction-movies.component.css']
})
export class SciencefictionMoviesComponent {
  @Input() sciencefictionMovieResult:Movie[]=[];
}
