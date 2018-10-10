import { Component, OnInit } from '@angular/core';
import { FoursquareApiService } from '../../foursquare-api/foursquare-api.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  query: string;

  constructor(private foursquareService: FoursquareApiService) { }

  ngOnInit() {
  }

  submitQuery() {
    console.log('Submit Query');
    this.foursquareService.getPlaces(this.query);
  }

}
