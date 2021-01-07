import { TestBed } from '@angular/core/testing';

import { GiphysService } from './giphys.service';

describe('GiphysService', () => {
  let service: GiphysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
