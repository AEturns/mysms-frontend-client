import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const LotteryCarousel = React.lazy(() => import('./views/pages/main/campaign-main/CampaignCarousel'))
const AddEditLottery = React.lazy(() => import('./views/pages/main/campaign-main/AddEditCampaign'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
  { path: '/campaigns', exact: true, name: 'Campaigns', element: LotteryCarousel },
  { path: '/campaign/add/:type', exact: true, name: 'Campaign', element: AddEditLottery },

]

export default routes
