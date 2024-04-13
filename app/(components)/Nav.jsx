import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@app/api/auth/[...nextauth]/options'

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header className='bg-gray-600 text-gray-100'>
      <nav className='flex justify-between items-center w-100 px-10 py-4'>
        <div>My site</div>
        <div className='flex gap-10'>
          <Link href="/">Sign in</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/Owner">Owner</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav