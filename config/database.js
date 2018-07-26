if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: process.env.MONGOURI
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost:27017/vidjot-dev' };
}
