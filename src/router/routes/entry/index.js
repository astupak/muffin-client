import Entry from './entry';
import LoginRoutes from './routes/login';
import JoinRoutes from './routes/join';

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
