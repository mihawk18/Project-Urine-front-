import { createBrowserRouter, RouterProvider, Outlet, } from 'react-router-dom';
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import Welcome from '../layout/Welcome';
import useAuth from '../hooks/useAuth';
import Water0 from '../layout/Water0';
import Water1 from '../layout/Water1';
import Recomment from '../layout/Recomment';
import Recomment2 from '../layout/Recomment2';
import Recomment3 from '../layout/Recomment3';
import Recomment4 from '../layout/Recomment4';
import Recomment5 from '../layout/Recomment5';
import Recomment6 from '../layout/Recomment6';
import Setting from '../layout/Setting';
import SettingNoticType from '../layout/SettingNoticType';
import ShowTime from '../layout/ShowTime';
import ShowTime2 from '../layout/ShowTime2';
import ShowTime3 from '../layout/ShowTime3';
import ShowTime4 from '../layout/ShowTime4';
import ShowTime5 from '../layout/ShowTime5';
import ShowTime6 from '../layout/ShowTime6';
import Account from '../layout/Account';
import Time from '../layout/Time';
import History from '../layout/History';
import ForgotPassword from '../layout/ForgotPassword';



// สร้างเส้นทางสำหรับผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบ
const guestRouter = createBrowserRouter([
  { index: true, element: <LoginForm /> },
  { path: '/register', element: <RegisterForm /> },
  { path: '/welcome', element: <Welcome /> },
  { path: '/water0', element: <Water0 /> },
  { path: '/water1', element: <Water1 /> },
  { path: '/recomment', element: <Recomment /> },
  { path: '/recomment2', element: <Recomment2 /> },
  { path: '/recomment3', element: <Recomment3 /> },
  { path: '/recomment4', element: <Recomment4 /> },
  { path: '/recomment5', element: <Recomment5 /> },
  { path: '/recomment6', element: <Recomment6 /> },
  { path: '/setting', element: <Setting /> },
  { path: '/settingnotictype', element: <SettingNoticType /> },
  { path: '/showtime', element: <ShowTime /> },
  { path: '/showtime2', element: <ShowTime2 /> },
  { path: '/showtime3', element: <ShowTime3 /> },
  { path: '/showtime4', element: <ShowTime4 /> },
  { path: '/showtime5', element: <ShowTime5 /> },
  { path: '/showtime6', element: <ShowTime6 /> },
  { path: '/account', element: <Account /> },
  { path: '/time', element: <Time /> },
  { path: '/history', element: <History /> },
  { path: '/forgotpassword', element: <ForgotPassword /> }  
]);

// สร้าง AppRouter component
export default function AppRouter() {
  // ดึงข้อมูลผู้ใช้จาก useAuth hook
  const { user } = useAuth();

  // กำหนดเส้นทางที่ถูกนำเข้าตามเงื่อนไข (ผู้ใช้ที่เข้าสู่ระบบหรือยังไม่ได้เข้าสู่ระบบ)
  const finalRouter = user?.id ? <Outlet /> : guestRouter;

  // นำเสนทางที่กำหนดไปใน RouterProvider
  return <RouterProvider router={finalRouter} />;
}
