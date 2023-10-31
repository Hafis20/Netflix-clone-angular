import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Models/movieApiModel';
import { VedioDetails } from 'src/app/Models/movieVideoApi'
import { CastMember } from 'src/app/Models/movieVideoCast';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){}

  getMovieDetailResult:Partial<Movie> = {};
  getMovieVideoResult:string ='';
  getMovieCastResult:CastMember[] = [];

  ngOnInit(){
    let getParamId:number = Number(this.router.snapshot.paramMap.get('id'));
    // console.log(getParamId);
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id:number){
    this.service.getMovieDetails(id).subscribe((result)=>{
      // console.log(result);
      this.getMovieDetailResult = result;
    })
  }

  getVideo(id:number){
    this.service.getMovieVideo(id).subscribe((result)=>{
      // console.log(result.results,'getMovieVideo#')
      result.results.forEach((element:VedioDetails) => {
        if(element.type === 'Trailer'){
          this.getMovieVideoResult = element.key;
        }
      });
    })
  }

  getCast(id:number){
    this.service.getMovieCast(id).subscribe((result)=>{
      // console.log(result.cast,'getMovieCast#')
      this.getMovieCastResult = result.cast;
    })
  }
}
