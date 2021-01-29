const users = [];

const addUser = ({ id, room }) => {
  id = id.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.id === id && user.room === room
  );

  if (!id || !room) {
    return { error: "Please enter user Id and room id" };
  }

  if (existingUser) {
    return { error: "User Id taken" };
  }

  const user = { id, room };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
