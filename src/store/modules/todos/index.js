// import axios from 'axios

import axios from "axios";

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos' , response.data)
  },
  async addTodo( { commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, completed: false
    });
    commit('newTodo', response.data);
  },
  async updateTodo({ commit }, updTodo ){
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
    commit('updTodo', response.data)
  } ,
  async deleteTodo( {  commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  }
}; 

const mutations = {
  setTodos: (state, todos) => {
    return state.todos = todos;
  },
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state , id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updTodo: (state, updTodo) => {
    const index = state.todos.findIndex( todo => todo.id === updTodo.id);
    if(index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};


export default {
  state() {
    return {
      todos: []
    }
  }, 
  getters: {
    allTodos(state) {
      return state.todos;
    }
  }, actions , mutations
}