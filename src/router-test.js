const test = require('tape');

const router = require('./router');

const supertest = require('supertest');

test('Initialise', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('check status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err, res) => {
      t.error(err);
      t.equal(res, res, 'should return res');
      t.end();
    });
});
