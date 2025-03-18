import { TestBed } from '@angular/core/testing';

import { postresService } from './postres.service';

describe('PostresService', () => {
  let service: postresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(postresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
