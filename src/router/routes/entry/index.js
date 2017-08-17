import Entry from './entry';
import LoginRoutes from './login';
import JoinRoutes from './join';

const routes = [{
  path: 'entry',
  alias: ['join', 'login'],
  component: Entry,
  children: [
    ...LoginRoutes,
    ...JoinRoutes,
  ],
}];

export default routes;
