import Home from '~/components/GlobalStyles/pages/Home';
import Following from '~/components/GlobalStyles/pages/Following';
import Profile from '~/components/GlobalStyles/pages/Profile';
import Upload from '~/components/GlobalStyles/pages/Upload';
import Search from '~/components/GlobalStyles/pages/Search';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
