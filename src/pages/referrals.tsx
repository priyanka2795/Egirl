import ReferralsIndex from '@components/Referrals'
import Sidebar from '@components/common/Sidebar'
import React from 'react'

const referrals = () => {
  return (
    <main className='mx-auto flex min-h-screen max-w-[1320px] '>
    <div>
      <Sidebar />
    </div>
    <div className='max-w-[1020px] flex-grow bg-main-background sm:ml-[88px] lg:min-w-[600px] xl:ml-[300px]'>
    <ReferralsIndex/>
    </div>
  </main>
    )
}

export default referrals
