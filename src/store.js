import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(
  reducer,
  { images: [], term: 'Giraffe' },
  composeWithDevTools(applyMiddleware(thunk))
);
