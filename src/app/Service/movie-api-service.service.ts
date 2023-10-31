import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/ApiResult';
import { Movie } from '../Models/movieApiModel';
import { CastVideo } from '../Models/movieVideoCast';
import { VedioApi } from '../Models/movieVideoApi';
// import { APIResponse } from '../Models/ApiResult'


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'http://api.themoviedb.org/3';
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

   //bannerapidata

   bannerApiData(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  // trendingmovieapidata 
  trendingMovieApiData(): Observable<APIResponse> {
    // console.log(this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`))
    return this.http.get<APIResponse>(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  // getSearchmoviedata
  getSearchMovie(data: any): Observable<APIResponse> {
    // console.log(data, 'movie#');
    return this.http.get<APIResponse>(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getmovievideo
  getMovieVideo(data: number): Observable<VedioApi> {
    return this.http.get<VedioApi>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: number): Observable<CastVideo> {
    return this.http.get<CastVideo>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

   // action 
   fetchActionMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
