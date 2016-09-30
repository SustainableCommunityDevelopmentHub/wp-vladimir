// initial store
const initialStore = {
    counter: 0
};

// test reducer
export default function reducer(store=initialStore, action) {
  switch (action.type) {
    // increase
    case 'test-plus-plus':
      return {...store, counter: store.counter + action.payload}
    // default return
    default:
      return store;
  }
}