import expect from 'expect';
import request from 'supertest';

import app from '../server';

describe('GET /api', () => {
  it('should get Codzichat Homepage', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json; charset=utf-8')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
