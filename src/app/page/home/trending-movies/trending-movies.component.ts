import { Component,Input } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';

@Component({
  selector: 'trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent {

  @Input() trendingResult:Movie[] =[];
}
