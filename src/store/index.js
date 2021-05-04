import { createStore } from 'vuex'
import coachesModule from './modules/coaches'
import 'es6-promise/auto'


const store = createStore({
  modules: {
    coaches: coachesModule,
  }
})

export default store;
