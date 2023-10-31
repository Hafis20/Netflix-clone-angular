import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movieApiModel';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult:Movie[] =[];
  trendingResult:Movie[] = [];
  actionMovieResult:Movie[] = [];
  adventureMovieResult:Movie[] = [];
  animationMovieResult:Movie[] = [];
  comedyMovieResult:Movie[] = [];
  documentaryMovieResult:Movie[] = [];
  sciencefictionMovieResult:Movie[] = [];
  thrillerMovieResult:Movie[] = [];

  ngOnInit(){
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      // console.log(result,'bannerApiResult#')
      this.bannerResult = result.results;
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      // console.log(result)
      this.trendingResult = result.results;
    })
  }

  //action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    })
  }
  
  //adventure
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult = result.results;
    })
  }

  //animation
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult = result.results;
    })
  }

  //comedy
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    })
  }

  //documentary
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      this.documentaryMovieResult = result.results;
    })
  }

  //sciencefiction
  sciencefictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      this.sciencefictionMovieResult = result.results;
    })
  }

  //thriller
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult = result.results;
    })
  }
}
