// import axios from 'axios

import axios from "axios";

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos' , response.data)
  }
}; 

const mutations = {
  setTodos: (state, todos) => {
    return state.todos = todos;
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