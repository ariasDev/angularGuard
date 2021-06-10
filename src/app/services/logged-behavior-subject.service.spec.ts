import { TestBed } from '@angular/core/testing';

import { LoggedBehaviorSubjectService } from './logged-behavior-subject.service';

describe('LoggedBehaviorSubjectService', () => {
  let service: LoggedBehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedBehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
