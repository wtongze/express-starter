import request from 'supertest';
import app from '@src/app';

describe('Demo', () => {
  it('Sample Test', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
});
