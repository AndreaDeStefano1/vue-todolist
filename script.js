const app = new Vue({
  el: '#app',

  data: {
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
    }
  }
})