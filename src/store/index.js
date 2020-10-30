import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default createStore(rootReducer, applyMiddleware(thunk));

// export default createStore(rootReducer,
//  compose(
//    applyMiddleware(thunk),
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//  ));
