import React from 'react'
import DashboardStatsGrid from './shared/DashboardStatsGrid'
import TransactionChart from './shared/TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrderChart from './RecentOrderChart'
import PopularProducts from './PopularProducts'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid/>
      <div className='flex flex-row w-full gap-4'>
        <TransactionChart/>
        <BuyerProfileChart/>
      </div>
      <div className='flex flex-row w-full gap-4'>
        <RecentOrderChart/>
        <PopularProducts/>
      </div>
    </div>
  )
}

export default Dashboard
