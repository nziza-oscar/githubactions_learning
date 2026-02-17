const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return a 200 status and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('Success');
  });
});

describe('GET /api/status', () => {
  it('should return a 200 status', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('OK');
  });
});
