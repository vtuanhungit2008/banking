import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSideBar';
import TotalBalance from '@/components/TotalBalance';
import React from 'react'

const HomePage = () => {
    const logIn = {firstName: "Hung", lastName:"Vo"};
  return (
   <section className='home'>
    <div className="home-content">
        <header className="home-header">
         <HeaderBox
         type = "greeting"
         title = "Welcome"
        user = {logIn?.firstName || "Guest"}
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
