import Github from  '../Images/github.svg'
import './Footer-module.css';

function Footer() {

  function goToGitHub(){

    window.location = 'https://github.com/Victor-Lis'

  }

  return (
    
    <footer>

        <h3 className="footer-title"> Minhas mídias profissionais: </h3>

        <div className="footer-row">
            
          <img className="footer-img pulsar" alt="GitHub" onClick={goToGitHub} src={Github} /> 
        
        </div>

    </footer>

  );
}

export default Footer;
