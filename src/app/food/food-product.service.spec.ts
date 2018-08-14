import { TestBed, inject } from '@angular/core/testing';

import { FoodProductService } from './food-product.service';

describe('FoodProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodProductService]
    });
  });

  it('should be created', inject([FoodProductService], (service: FoodProductService) => {
    expect(service).toBeTruthy();
  }));
});
