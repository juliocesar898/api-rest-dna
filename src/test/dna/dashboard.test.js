const request = require('supertest');
const app = require('../../app');
const Dna = require('../../models/dna');

jest.mock('../../models/dna', () => ({
  find: jest.fn().mockImplementation(),
}));

describe('Post Endpoints', () => {
  it('should determinates dna is special', async () => {
    Dna.find.mockResolvedValueOnce(
      Promise.resolve([
        { id: '123456', isSpecial: true },
        { id: '796176', isSpecial: false },
        { id: '971365', isSpecial: false },
      ])
    );
    const res = await request(app).get('/api/dashboard');
    expect(res.statusCode).toEqual(200);
  });
});
