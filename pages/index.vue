<template>
  <main>
    <h1>Task List</h1>
    <p>Create a list of Tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="add a task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add Task</button>
    </div>

    <div class="tasks">
      <Task v-for="task in tasks" :key="task" :task="task"></Task>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
