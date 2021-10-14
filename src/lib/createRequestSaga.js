import {call, put} from 'redux=saga/effects';
import {startLoading, finishLoading} from '../modules/loading';

export const crateRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};

export default function crateRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

     return function*(action) {
         yield put(startLoading(type)); //로딩 시작
         try {
             const response = yield call(request, action.payload);
             yield put({
                 type: SUCCESS,
                 payload : response.data,
             });
         } catch (e) {
             yield put({
                 type : FAILURE,
                 payload : e,
                 error : true,
             });
         }
         yield put(finishLoading(type)); //로딩 끝
     }

}