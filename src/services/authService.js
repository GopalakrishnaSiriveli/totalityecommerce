const USERS_KEY = 'users_db';

// Helper function to get users from localStorage
const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Helper function to save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Login Service
export const loginService = (email, password) => {
  const users = getUsers();
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    return { id: user.id, name: user.name, email: user.email };
  } else {
    throw new Error('Invalid credentials');
  }
};

// Register Service
export const registerService = (name, email, password) => {
  const users = getUsers();
  
  // Check if the email already exists
  if (users.find(user => user.email === email)) {
    throw new Error('Email already registered');
  }

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  saveUsers(users);

  return { id: newUser.id, name: newUser.name, email: newUser.email };
};
