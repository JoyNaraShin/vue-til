import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//* Axios 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

//* 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

//* 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

//* 학습 노트 조회 API
function fetchPost() {
  return instance.get('posts');
}

//* 학습 노트 생성 API
function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPost, createPost };
