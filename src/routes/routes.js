import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));
const Plan = React.lazy(() => import('../pages/shopPlan/ShopPlan'));
const Profile = React.lazy(() => import('../pages/profile'));

const frontRoutes = [
  { path: '/', name: 'Home', component: Home, exact: true },
  { path: '/ShopPlan', name: 'ShopPlan', component: Plan, exact: true },
  { path: '/profile', name: 'profile', component: Profile, exact: true },
  
];

const adminRoutes = [
];

export { frontRoutes, adminRoutes };
