function createStore(reducer) {
  let state = {};
  const subscriber = [];
  const store = {
    getState() {
      return { ...state };
    },

    dispatch(action) {
      state = reducer(state, action);

      for (const callback of subscriber) {
        callback(state);
      }
    },

    subscribe(callback) {
      subscriber.push(callback);
    }
  };
  return store;
}

export { createStore };
