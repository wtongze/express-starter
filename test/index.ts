import request from 'supertest';
import app from '@src/app';

describe('Demo', () => {
  it('Sample Test', () =>
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => res.body === 'Hello World!'));
});
