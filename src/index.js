import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';  //index.js를 불러오기 때문에 이렇게

import * as actions from './actions';

// store 생성
const store = createStore(reducers);

//store가 하는 일
//1. dispatch : state, action을 reducer로 보냄
//2. getSate() : 현재 상태를 반환하는 함수
//3. subscribe(listener) : 상태가 바뀔때 마다 실행할 함수를 등록하는 함수
//4. replaceReducer(nextReducer) : 핫리로딩과 코드분할을 구현할 때 사용

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200,200,200]));

// unsubscribe();
// //unsubscribe 후에는 dispatch되지 않는다.
// store.dispatch(actions.setColor([210,210,210]));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
