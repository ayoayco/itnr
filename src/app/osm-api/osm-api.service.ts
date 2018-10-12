import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsmApiService {

    baseURL = "https://api.openstreetmap.org";
    constructor() { }

    getData() {

    }

    buildURL(endpoint: string, inputs: any): string {
        let url = this.baseURL + endpoint;



        return url;
    }
    

}
