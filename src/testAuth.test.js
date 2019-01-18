import testAuth from './testAuth';

test('auth works', (done) => {
  testAuth((error, response) => {
    if (error) throw error;
    expect(response.status).toBe('success');
    done();
  })
});
