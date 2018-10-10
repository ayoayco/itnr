import { TestBed, inject } from '@angular/core/testing';

import { FoursquareApiService } from './foursquare-api.service';

describe('FoursquareApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoursquareApiService]
    });
  });

  it('should be created', inject([FoursquareApiService], (service: FoursquareApiService) => {
    expect(service).toBeTruthy();
  }));
});
