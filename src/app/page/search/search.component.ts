import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Movie } from 'src/app/Models/movieApiModel';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  searchedResult:Movie[] = [];

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  onSubmit(){
    // console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      // console.log(result);
      this.searchedResult = result.results;
    })
  }
}
