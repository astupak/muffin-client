import BasicLayout from '@/shared/basic/layout/basicLayout';
import LoginHeader from './loginHeader';
import LoginContent from './login';

const routes = [{
  name: 'Login',
  path: 'login',
  components: {
    layout: BasicLayout,
    header: LoginHeader,
    content: LoginContent,
  },
}];

export default routes;
