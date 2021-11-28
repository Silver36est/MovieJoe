import { TestBed } from '@angular/core/testing';

import { MovieJoeService } from './movie-joe.service';

describe('MovieJoeService', () => {
  let service: MovieJoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieJoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
