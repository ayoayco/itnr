import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class FoursquareApiService {

  baseURL = 'https://api.foursquare.com/v2';

  constructor(private http: HttpClient) { }

  getPlaces(query: string) {
    const inputs = {
      'client_id': 'WXORBRNJTHQKWYZAHABAUZIQNQXWQV2P4UBQSFXCYO5NVA5D',
      'client_secret': '1QBJ5JXOVI552ZCZ01PVFLEDNZODQD1JZ4OFSV04AGJ0KMJG',
      'v': '20180323',
      'limit': '1',
      'll': '40.7243,-74.0018',
      'query': query
    };
    const url = this.buildURL('/venues/explore', inputs);

    console.log('URL', url);

    this.http.get(url).subscribe(
      res => {
        console.log('Get result', res);
      }
    );
  }

  private buildURL(endpoint: string, inputs?: any): string {
    let url = this.baseURL + endpoint;
    let firstKey = true;

    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        if (firstKey) {
          url += '?';
          firstKey = false;
        } else {
          url += '&';
        }
        url += `${key}=${inputs[key]}`;
      }
    }

    return encodeURI(url);
  }
}
