import { options } from '@app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const OwnerPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/CreateUser")
  }
  return (


    <section className='w-full flex-center flex-col'>
      <div>Home</div>
    </section>
  )
}

export default OwnerPage