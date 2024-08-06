const request = require('supertest');
const app = require('../../app');
const Dna = require('../../models/dna');

jest.mock('../../models/dna', () => ({
  find: jest.fn().mockImplementation()
}));

describe('Dna is special', () => {
  it('should determinates dna is special', async () => {
    Dna.find.mockResolvedValueOnce(Promise.resolve([{ id: '123456' }]));
    const res = await request(app)
      .post('/api/dna')
      .send({
        dna: ['AGGGGA', 'CGTTCC', 'TAATCG', 'TCAATT', 'CTCCTT', 'TCATAA'],
      });
    expect(res.statusCode).toEqual(200);
  });
});


describe('Dna is not special', () => {
  it('should determinates dna is NOt special', async () => {
    Dna.find.mockResolvedValueOnce(Promise.resolve([{ id: '123456' }]));
    const res = await request(app)
      .post('/api/dna')
      .send({
        dna: ['AGGCGA', 'CGTTCC', 'TAATCG', 'TCAATT', 'CTCCTT', 'TCATAA'],
      });
    expect(res.statusCode).toEqual(403);
  });
});
