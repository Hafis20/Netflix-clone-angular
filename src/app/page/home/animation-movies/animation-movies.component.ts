import { Component, Input } from "@angular/core";
import { Movie } from "src/app/Models/movieApiModel";

@Component({
   selector:'animation-movies',
   templateUrl:'./animation-movies.component.html',
   styleUrls:['./animation-movies.component.css']
})

export class AnimationMoviesComponent{
   @Input() animationMovieResult:Movie[] = [];
}