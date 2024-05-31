import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSideBar';
import TotalBalance from '@/components/TotalBalance';
import { getLoggedInUser } from '@/lib/apwrite';
import React from 'react'

const HomePage = async () => {
    const logIn = await getLoggedInUser();
    console.log(logIn);
    
  return (
   <section className='home'>
    <div className="home-content">
        <header className="home-header">
         <HeaderBox
         type = "greeting"
         title = "Welcome"
        user = {logIn?.name || "Guest"}
        subtext = "Access and manage your account and transactions "
         />
         <TotalBalance
         accounts = {[]}
         totalBanks={1}
         totalCurrentBalance={1250.35}
         />
        </header>
      Recent trans
    </div>
    <RightSidebar user={logIn}
    transactions={[]}
    banks={[{currentBalance:123.50},{currentBalance:200.0}]}/>
   </section>
  )
}

export default HomePage
