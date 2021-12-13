// vuex
import { createStore } from 'vuex';

const store = createStore({ 
  state: {
      count: 100,
      username: 'test'
  }
});

export default store;