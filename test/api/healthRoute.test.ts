
import request from 'supertest';
import app from '../../src/app';  

describe('GET /api/v1/health', () => {
  it('should return server status, uptime, timestamp, and version', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(typeof response.body.uptime).toBe('number');
    expect(new Date(response.body.timestamp).toISOString()).toBe(response.body.timestamp);
    expect(response.body.version).toBe('1.0.0');
  });
});
