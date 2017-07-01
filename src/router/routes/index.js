import HomeRoutes from './home';
import LoginRoutes from './login';
import Root from './root';

const routes = [{
  path: '/',
  redirect: 'home',
  component: Root,
  children: [
    ...HomeRoutes,
    ...LoginRoutes,
  ],
}];

export default routes;
