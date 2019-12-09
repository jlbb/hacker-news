// https://sysgears.com/articles/how-to-create-an-apollo-react-express-application/
// #1 Import the model created with mongoose
const { AppModel, UserModel, StoryModel } = require("./models");

const resolvers = {
  Query: {
    app: async () => {
      const app = await AppModel.findOne();

      if (app.length === 0) {
        app = new AppModel();
        app.save();
      }

      return app;
    },
    users: async () => {
      const app = await AppModel.findOne();
      return app.users;
    },
    user: async (_, { id }) => {
      const app = await AppModel.findOne();
      return app.users.find(user => user.id === id);
    },
    stories: async () => {
      const app = await AppModel.findOne();
      return app.stories;
    }
  },
  Mutation: {
    addUser: async (_, { email, password }) => {
      const app = await AppModel.findOne();

      const newUser = new UserModel({ email, password });
      newUser.save();

      if (app.users) {
        app.users.push(newUser);
        app.save();
      }

      return newUser.email;
    }
    // removeToDo: async (_, { id }) => {
    //   const removedToDo = await ToDo.findByIdAndRemove(id);
    //   removedToDo.save();
    //   return removedToDo;
    // },
    // updateToDo: async (_, { id, name }) => {
    //   const updatedToDo = await ToDo.findById(id);
    //   updatedToDo.name = name;
    //   updatedToDo.save();
    //   return updatedToDo;
    // },
    // addToDoItem: async (_, { idToDo, toDoItem }) => {
    //   const toDo = await ToDo.findById(idToDo);
    //   const newToDo = new ToDoItem(toDoItem);
    //   toDo.toDoList.push(newToDo);
    //   toDo.save();
    //   return newToDo;
    // },
    // removeToDoItem: async (_, { idToDo, idToDoItem }) => {
    //   const toDo = await ToDo.findById(idToDo);
    //   let removedToDoItem;
    //   toDo.toDoList = toDo.toDoList.reduce((acc, item) => {
    //     if (item.id === idToDoItem) {
    //       removedToDoItem = item;
    //       return acc;
    //     }
    //     return [...acc, item];
    //   }, []);
    //   toDo.save();
    //   return removedToDoItem;
    // },
    // updateToDoItem: async (_, { idToDo, toDoItem }) => {
    //   const toDo = await ToDo.findById(idToDo);
    //   let updatedToDoItem = {};
    //   toDo.toDoList = toDo.toDoList.reduce((acc, item) => {
    //     if (item.id === toDoItem.id) {
    //       updatedToDoItem = item;
    //       // TODO Check recursive merge alternatives as lodash/merge
    //       Object.assign(updatedToDoItem, toDoItem);
    //       return [...acc, updatedToDoItem];
    //     }
    //     return [...acc, item];
    //   }, []);
    //   toDo.save();
    //   return updatedToDoItem;
    // }
  }
};

module.exports = resolvers;
