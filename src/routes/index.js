import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

//* 플러그인을 실행/초기화하기
Vue.use(VueRouter);

export default new VueRouter({
  //* url의 #를 제거
  mode: 'history',
  //* Router에 의해서 routing 정보를 담는 배열 형태의 속성
  routes: [
    //* '/' 경로로 들어왔을 때, logig path로 redirect
    {
      path: '/',
      redirect: '/login',
    },
    //* code spliting, webpack의 dynamic import를 활용
    { path: '/login', component: () => import('@/views/LoginPage.vue') },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    //* fallback route
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
