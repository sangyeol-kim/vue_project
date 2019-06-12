import axios from 'axios';
import {
  FETCH_MEMOS,
  ADD_MEMO,
  DELETE_MEMO,
  EDIT_MEMO
} from './mutations-types';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
});

// 사용할 함수를 fetchMemos라는 이름의 함수로 정의
export function fetchMemos({ commit }) {
  memoAPICore.get('/').then((res) => {
    // API 호출 결과의 데이터와 함께 FETCH_MEMOS라는 이름의 mutation의 커밋을 한다
    commit(FETCH_MEMOS, res.data);
  });
}

export function addMemo({ commit }, payload) {
  memoAPICore.post('/', payload).then((res) => {
    // ADD_MEMO 뮤테이션을 호출하고 API를 통해 받아온 메모 데이터를 넘긴다
    commit(ADD_MEMO, res.data);
  });
}

export function deleteMemo({ commit }, id) {
  memoAPICore.delete(`/${id}`).then(() => {
    commit(DELETE_MEMO, id);
  });
}

export function updateMemo({ commit }, payload) {
  const { id, content } = payload;
  memoAPICore.put(`/${id}`, { content }).then(() => {
    commit(EDIT_MEMO, payload);
  });
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
};
