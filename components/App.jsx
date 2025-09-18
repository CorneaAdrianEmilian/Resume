<<<<<<< HEAD
import Header from "./Header"
import Profile from "./Profile"
import { profile } from "../data"


export default function App()
{
return(
  <main>
    <Header/>
    <Profile picture={profile.picture} greetings={profile.greetings} description ={profile.description}/>
  </main>
  /* test3*/ 
)
=======
import Header from "./Header"
import Profile from "./Profile"
import { profile } from "../data"


export default function App()
{
return(
  <main>
    <Header/>
    <Profile picture={profile.picture} greetings={profile.greetings} description ={profile.description}/>
  </main>
)
>>>>>>> 11b5e12517cbf8ba8edccb421beea3a9ae870b45
}