import myPicture from '../Images/My picture.jpg';
import './Nav-module.css';

function Nav({navTitle, changePage}){

  const data = {

    title: 'Dev Victor Website',
    text: 'Olha que site legal!',
    url: 'https://react-dev-victor-landing-page.netlify.app/'

  }

  async function enviar(){

    if(navigator.canShare && navigator.canShare(data)){

      await navigator.share(data);

    }

  }

  return (
    
    <nav> 
        
      <div className="my-self">

        <img id="my-picture" className="nav-img" alt="My-self" src={myPicture} /> 

        <h3 className="nav-title nav-title-clickabe" onClick={enviar}> Dev Victor </h3>

      </div>

      <h3 className="nav-title nav-title-clickabe" onClick={changePage}> {navTitle} </h3>

    </nav>

  );
}

export default Nav;
