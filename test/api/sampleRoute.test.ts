import request from 'supertest';
import app from '../../src/app';

describe('Sample API Routes', () => {
  it('should return 200 on GET /api/sample', async () => {
    const response = await request(app).get('/api/sample');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Sample route');
  });

  
});
