import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

//* 플러그인을 실행/초기화하기
Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    //* fallback route
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

//* 네비게이션 가드
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return;
  }
  next();
});
export default router;
