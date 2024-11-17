type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  return {
    name: initialValues.name || '',  
    surname: initialValues.surname || '',
    email: initialValues.email || '',
    password: initialValues.password || '',
  };
}

const user = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log(user);

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(initialValues: Partial<User>, existingUser: User): User {
//   return {
//     name: initialValues.name || existingUser.name,
//     surname: initialValues.surname || existingUser.surname,
//     email: initialValues.email || existingUser.email,
//     password: initialValues.password || existingUser.password,
//   };
// }

// const existingUser = {
//   name: 'John',
//   surname: 'Doe',
//   email: 'john.doe@mail.com',
//   password: 'oldpassword123'
// };

// const updatedUser = createOrUpdateUser({
//   email: 'new.email@mail.com',
//   password: 'newpassword123'
// }, existingUser);

// console.log(updatedUser);
