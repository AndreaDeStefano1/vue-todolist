const app = new Vue({
  el: '#app',

  data: {
    newTask: '',
    toDoList:[
      {
        text: 'Spesa',
        done: false
      },
      {
        text: 'Studio',
        done: true
      },
      {
        text: 'Palestra',
        done: false
      }
    ]
  },

  methods: {
    remove(i){
      this.toDoList.splice(i , 1)
    },
    addTask(newTask){
      this.toDoList.push({text: `${newTask}`, done: 'false' ,});
      this.newTask = ''
   },
  }
})