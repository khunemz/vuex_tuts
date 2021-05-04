// import axios from 'axios

const actions = {};

const mutations = {};


export default {
  state() {
    return {
      coaches: [
        {
          "id": "c101", 
          "firstName": "chutipong",
          "lastName": "roobklom",
          "age": 30,
          "skills": ['frontend', 'backend', 'database', 'cms'],
          "about": "Highly responsible for assignment",
          "rate": '100'
        },{
          "id": "c102", 
          "firstName": "Roger",
          "lastName": "Steve",
          "age": 30,
          "skills": ['marketing', 'ads', 'finance', 'management'],
          "about": "Just another office man",
          "rate": '60'
        },{
          "id": "c103", 
          "firstName": "Robert",
          "lastName": "Junior",
          "age": 28,
          "skills": ['engineering', 'mechanics', 'boiler', 'inspector'],
          "about": "Hight skills set for mechanics",
          "rate": '80'
        }
      ]
    }
  }, 
  getters: {
    displayCoaches(state) {
      console.log('in getters')
      return state.coaches;
    }
  }, actions , mutations
}