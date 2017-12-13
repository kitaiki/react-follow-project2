//reducer
// 비동기 작업 x
// 인수 변경 x
// 동일한 인수  = 동일한 결과
// 이전 상태와 액션을 받아서 다음 상태를 반환한다. 

import * as types from '../actions/ActionTypes';

// 초기값 생성
const initalState = {
    number: 0,
    dummyObject: {
        a: 0, 
        b: 1,
        c: 2
    }
};



// export default function count(state, action) {
//     // 초기 값이 undefined인경우 
//     if(typeof state === 'undefined') {
//         return initalState;
//     }

//     return state;
// }


//es6 default argument 문법 적용
//state가 undefined인 경우 initState사용함
export default function count(state = initalState, action) {
    
    switch(action.type) {
        case types.INCREMENT:
            return  {
                ...state,                                  // state복사
                number: state.number + 1,                  // number +1
                dummyObject: {...state.dummyObject, a: 1}  // dummyObjectd의 a값을 1로 변경
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }

}