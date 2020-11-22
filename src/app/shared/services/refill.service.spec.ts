import { RefillService } from './refill.service';

describe('RefillService', () => {
  let service: RefillService;
  beforeEach(() => {
    service = new RefillService();
  });


  it('get should return error or success message from observable', done => {
    service.refill({ providerId: '1', phoneNumber: '+1 (111) 111-11-11', amount: 10 }).subscribe(
      (successMessage: string) => {
        expect(successMessage).toBeDefined();
        done();
      },
      (errorMessage: string) => {
        expect(errorMessage).toBe('Refill is unsuccessful. Please try again.');
        done();
      },
    );
  });
});
