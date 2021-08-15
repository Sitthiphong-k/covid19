/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CovidApiService } from './covidApi.service';

describe('Service: CovidApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovidApiService]
    });
  });

  it('should ...', inject([CovidApiService], (service: CovidApiService) => {
    expect(service).toBeTruthy();
  }));
});
