import BasicLayout from '@/shared/layouts/basic/basicLayout';
import HomeContent from './home';

const routes = [{
  name: 'Home',
  path: 'home',
  components: {
    layout: BasicLayout,
    content: HomeContent,
  },
}];

export default routes;
