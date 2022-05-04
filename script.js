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
  }
})