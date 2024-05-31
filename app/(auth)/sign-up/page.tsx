import AuthForm from '@/components/AuthForm'


import React, { use } from 'react'

import { getLoggedInUser } from '@/lib/apwrite';

const SignUp = async() => {
    const user = await getLoggedInUser();
    console.log("user:" , user);
    
  return (
    <section className="flex-center m-auto size-full max-sm:px-6">
      <AuthForm type="sign-up" />

    </section>
  )
} 

export default SignUp
