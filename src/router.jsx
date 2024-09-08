import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import MyPage from './pages/my/MyPage';
import WishPage from './pages/wish/WishPage';
import CoursePage from './pages/course/CoursePage';
import PlacePage from './pages/place/PlacePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/place', element: <PlacePage /> },
      { path: '/course', element: <CoursePage /> },
      { path: '/wish', element: <WishPage /> },
      { path: '/my', element: <MyPage /> },
    ],
  },
]);

export default router;
