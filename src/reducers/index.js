import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

// reducer들을 하나로 합침
const reducers = combineReducers({
    counter, ui
});

export default reducers;