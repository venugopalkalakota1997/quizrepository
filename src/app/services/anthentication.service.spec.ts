import { TestBed } from '@angular/core/testing';

import { AnthenticationService } from './anthentication.service';

describe('AnthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnthenticationService = TestBed.get(AnthenticationService);
    expect(service).toBeTruthy();
  });
});
