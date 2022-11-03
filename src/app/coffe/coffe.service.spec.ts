/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeService } from './coffe.service';

describe('Service: Coffe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeService]
    });
  });

  it('should ...', inject([CoffeService], (service: CoffeService) => {
    expect(service).toBeTruthy();
  }));
});
