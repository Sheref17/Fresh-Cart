import { TestBed } from '@angular/core/testing';

import { CategriousService } from './categrious.service';

describe('CategriousService', () => {
  let service: CategriousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategriousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
