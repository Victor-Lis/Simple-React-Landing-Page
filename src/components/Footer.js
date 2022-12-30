import Github from  '../Images/github.svg'
import './Footer-module.css';

function Footer() {

  function goToGitHub(){

    window.location = 'https://github.com/Victor-Lis'

  }

  return (
    
    <footer>

        <h3 className="footer-title"> My social medias </h3>

        <div className="footer-row">
            
          <img className="footer-img pulsar" alt="GitHub img" onClick={goToGitHub} src={Github} /> 
        
        </div>

    </footer>

  );
}

export default Footer;
