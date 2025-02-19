const mongoose = require('mongoose');
const User = require('./Schema.js/UserSchema');

mongoose.connect('mongodb://localhost:27017/userManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

const newUser = new User({
  username: 'johnDoe',
  email: 'john@example.com',
  password: 'securePassword123',
  roles: ['user'],
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }
});

newUser.save()
  .then(() => console.log('User created successfully'))
  .catch((err) => console.log('Error creating user', err));
