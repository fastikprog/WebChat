
const users = []

const userJoin = (id, username, room) => {
  const user = { id, username, room };
  users.push(user);

  return user;
}

const getCurrentUser = (id) => {
  return users.find((user) => {
    return user.id == id; // Add return statement here
  });
};

const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

const getRoomUsers = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
}