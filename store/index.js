export default {
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, task) {
      // return state.tasks.push(task);
      state.tasks = [{ content: task, done: false }, ...state.tasks];
    },
    removeTask(state, task) {
      return state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    toggleTask(state, task) {
      return (task.done = !task.done);
    },
  },
};
