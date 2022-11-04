/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeService } from './coffe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Coffe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoffeService]
    });
  });

  it('should ...', inject([CoffeService], (service: CoffeService) => {
    expect(service).toBeTruthy();
  }));
});
