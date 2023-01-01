import myPicture from '../Images/My picture.jpg';
import './Nav-module.css';

function Nav({navTitle, changePage}){

  return (
    
    <nav> 
        
      <div className="my-self">

        <img id="my-picture" className="nav-img" alt="My-self" src={myPicture} /> 

        <h3 className="nav-title"> Dev Victor </h3>

      </div>

      <h3 className="nav-title" onClick={changePage}> {navTitle} </h3>

    </nav>

  );
}

export default Nav;
