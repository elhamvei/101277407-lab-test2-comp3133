import { TestBed } from '@angular/core/testing';

import { SpacexApiService } from './spacexapi.service';

describe('MissionService', () => {
  let service: SpacexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
