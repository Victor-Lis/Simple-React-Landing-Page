import React from '../Images/React.png';
import './Projects-module.css';

function Projects() {

  function redirectToAirPortCode(){

    window.location="https://airport-code.netlify.app/"

  }

  return (
    
    <main className='projects'>

      <h1 className='projects-title'> My Projects </h1>

      <div className='projects-area'> 

          <div className='project-card'>

            <h2> Air Port Code </h2>

            <p> Este é um projeto de escola, inicialmente era apenas para trabalhar com lógicas básicas como if e else, porém decidi aprimorar, incluindo inclusive um sistema de local storage, este projeto simula um sistema de um aéroporto na época do auge da pândemia </p>

            <button onClick={redirectToAirPortCode}> Ver! </button>  

          </div>

      </div>

    </main>

  );

}

export default Projects;