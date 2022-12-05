import { User } from './models/User';

// creation of a user
const user = User.buildUser({ id: 1 });

// console log user details
user.on('change', () => {
  console.log(user);
});

user.fetch();

console.log(user);
