import rootReducer from './rootReducer';

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
