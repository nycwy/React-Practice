import { useContext } from 'react'
import Login from '../component/Login'
import Profile from '../component/Profile'
import UserContext from '../context/userContext';
import UserContextProvider from '../context/UserContextProvider';

function AppContent() {
  const { user } = useContext(UserContext);

  return (!user ? <Login /> : <Profile />);
}

function App() {
  return (
    <UserContextProvider>
      <AppContent/>
    </UserContextProvider>
  )
}

export default App