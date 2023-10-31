import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'comedy-movies',
  templateUrl: './comedy-movies.component.html',
  styleUrls: ['./comedy-movies.component.css']
})
export class ComedyMoviesComponent {
  @Input() comedyMovieResult:Movie[] =[];
}
