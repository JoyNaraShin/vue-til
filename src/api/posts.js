//* 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

//* 학습 노트 조회 API
function fetchPost() {
  return posts.get('/');
}

//* 학습 노트 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

//* 학습 노트 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPost, createPost, deletePost };
