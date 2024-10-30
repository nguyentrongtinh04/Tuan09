//Redux_ToolKit

// import { configureStore } from '@reduxjs/toolkit';
// import jobReducer from './jobSlice';

// export const store = configureStore({
//   reducer: {
//     jobs: jobReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import jobsReducer from './jobSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

