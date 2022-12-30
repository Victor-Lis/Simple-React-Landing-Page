import myPicture from '../Images/My picture.jpg';
import './Nav-module.css';

function Nav() {
  return (
    
    <nav> 
        
        <img id="my-picture" className="nav-img" alt="My picture" src={myPicture} /> 

        <h2 className="nav-title"> Dev Victor </h2>

    </nav>

  );
}

export default Nav;
