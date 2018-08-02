const test = require('tape');

const supertest = require('supertest');

const router = require('./router');

test('Initialise', (t) => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('check status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res, res, 'should return res');
      t.end();
    });
});

test('check status code is 404', (t) => {
  supertest(router)
    .get('/poop')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, 'unknown url', 'response should contain \'unknown url\'');
      t.end();
    });
});
