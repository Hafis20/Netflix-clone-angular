import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { SearchComponent } from './page/search/search.component';
import { MovieDetailsComponent } from './page/movie-details/movie-details.component';
import { MovieApiServiceService } from './Service/movie-api-service.service';
import { BannersComponent } from './page/home/banners/banners.component';
import { TrendingMoviesComponent } from './page/home/trending-movies/trending-movies.component';
import { ActionMoviesComponent } from './page/home/action-movies/action-movies.component';
import { AdventureMoviesComponent } from './page/home/adventure-movies/adventure-movies.component';
import { ComedyMoviesComponent } from './page/home/comedy-movies/comedy-movies.component';
import { AnimationMoviesComponent } from './page/home/animation-movies/animation-movies.component'
import { DocumentaryMoviesComponent } from './page/home/documentary-movies/documentary-movies.component';
import { SciencefictionMoviesComponent } from './page/home/sciencefiction-movies/sciencefiction-movies.component';
import { ThrillerMoviesComponent } from './page/home/thriller-movies/thriller-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    BannersComponent,
    TrendingMoviesComponent,
    ActionMoviesComponent,
    AdventureMoviesComponent,
    ComedyMoviesComponent,
    AnimationMoviesComponent,
    DocumentaryMoviesComponent,
    SciencefictionMoviesComponent,
    ThrillerMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
