import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent {

  @Input() actionMovieResult:Movie[] =[]
}
