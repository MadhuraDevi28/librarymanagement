import { TestBed } from '@angular/core/testing';

import { BooksHistoryService } from './books-history.service';

describe('BooksHistoryService', () => {
  let service: BooksHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
