import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'adventure-movies',
  templateUrl: './adventure-movies.component.html',
  styleUrls: ['./adventure-movies.component.css']
})
export class AdventureMoviesComponent {
  @Input() adventureMovieResult:Movie[] =[]
}
