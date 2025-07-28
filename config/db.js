const {mongoose} = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/exam_project';

mongoose.connect(dbURI)
.then(() => {
  console.log('Database connected successfully');
})
.catch((err) => {
  console.error('Database connection error:', err);
});

module.exports = mongoose;