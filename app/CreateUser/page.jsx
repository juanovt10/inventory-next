import { options } from '@app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const CreateUserPage = async () => {
  // const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/CreateUser")
  // }


  return (
    <section className='w-full flex-center flex-col'>
      <div>
        <h1>Create user</h1>
        {session?.user?.email}
        {session?.user?.role}
      </div>
    </section>
  )
}

export default CreateUserPage