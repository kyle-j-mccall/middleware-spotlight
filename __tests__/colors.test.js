const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/colors/purple should return ["red", "blue"]', async () => {
    const resp = await request(app).get('/colors/purple');
    expect(resp.body).toEqual(['red', 'blue']);
  });
  it('/colors/orange should return ["red", "yellow"]', async () => {
    const resp = await request(app).get('/colors/orange');
    expect(resp.body).toEqual(['red', 'yellow']);
  });
  it('/colors/green should return ["red", "blue"]', async () => {
    const resp = await request(app).get('/colors/green');
    expect(resp.body).toEqual(['yellow', 'blue']);
  });
  afterAll(() => {
    pool.end();
  });
});
