module.exports = function(app) {
  // Insert routes below
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/user', require('./api/user'));
  app.use('/api/post', require('./api/post'));
  app.use('/');
}
