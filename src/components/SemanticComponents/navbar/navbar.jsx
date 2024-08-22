import '../navbar/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

export default function Navbar({ user, setUser}) {
  const navigate = useNavigate();
  async function signout(){
    try{
      console.log('signing out');
      await authService.signout();
      setUser('');
      navigate('/');
    }catch(error){
      console.log(error);
    }
  }
  return (
    <nav>
        <div className="nav-left">
        <img className='nav-logo' src='https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png' alt="Logo" />
      </div>
      <div className="nav-right">
         
        {user ? (
          <>
            
              <Link to={`${user.id}/projects`}>Projects</Link>
            
              <button className='but-Sign-Out' onClick={signout}>Sign Out</button>
            
          </>
        ) : (
          <>
            
              <Link to="/signin">Sign In</Link>
           
              <Link to="/signup">Sign Up</Link>
            
          </>
        )}
      </div>
    </nav>
  );
}