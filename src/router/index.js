import { Router } from '@vaadin/router';
import '../components/app-navigation.js';
import '../components/app-footer.js';

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
  {
    action: () => import('../pages/about-page.js'),
    component: 'about-page',
    path: '/about',
  },
  {
    action: () => import('../pages/contact-page.js'),
    component: 'contact-page',
    path: '/contact',
  },
]);
