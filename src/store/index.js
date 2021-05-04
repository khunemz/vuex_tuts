import { createStore } from 'vuex'
import todosModules from './modules/todos'
import 'es6-promise/auto'


const store = createStore({
  modules: {
    todos: todosModules,
  }
})

export default store;
