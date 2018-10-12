import { TestBed, inject } from '@angular/core/testing';

import { OsmApiService } from './osm-api.service';

describe('OsmApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsmApiService]
    });
  });

  it('should be created', inject([OsmApiService], (service: OsmApiService) => {
    expect(service).toBeTruthy();
  }));
});
