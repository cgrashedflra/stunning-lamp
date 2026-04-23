import { auth } from '@/auth'
import SignIn from '@/components/sign-in'
import SignOut from '@/components/sign-out';
import Email from 'next-auth/providers/email';

 

const Home = async () => {
const session = await auth()
  session ? console.log(`Logged in as ${session.user?.email} ${session.user?.name}`) : console.log("Not logged in");
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <SignIn />
      <SignOut />
    </div>
  )
}

export default Home

