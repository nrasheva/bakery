import { Router } from '@vaadin/router';
import '../components/app-navigation.js';

const router = new Router(document.querySelector('main'));

router.setRoutes([
  {
    action: () => import('../pages/home-page.js'),
    component: 'home-page',
    path: '/',
  },
  {
    action: () => import('../pages/products-page.js'),
    component: 'products-page',
    path: '/products',
  },
]);
