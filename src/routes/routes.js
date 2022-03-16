import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));
const Plan = React.lazy(() => import('../pages/shopPlan/ShopPlan'));
const Profile = React.lazy(() => import('../pages/profile'));
const Dashboard = React.lazy(() => import('../pages/admin'));
const Payment1 = React.lazy(() => import('../pages/payment_1'));
const Payment2 = React.lazy(() => import('../pages/payment_2'));

const frontRoutes = [
  { path: '/mainnet/', name: 'Home', component: Home, exact: true },
  { path: '/mainnet/shopPlan', name: 'ShopPlan', component: Plan, exact: true },
  { path: '/mainnet/profile', name: 'profile', component: Profile, exact: true },
  { path: '/mainnet/admin', name: 'dashboard', component: Dashboard, exact: true },
  { path: '/mainnet/payment1', name: 'Payment1', component: Payment1, exact: true },
  { path: '/mainnet/payment2', name: 'Payment2', component: Payment2, exact: true },
  
];

const adminRoutes = [
];

export { frontRoutes, adminRoutes };
