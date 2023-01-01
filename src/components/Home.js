import internetPicture from '../Images/Internet Picture.jpg';
import JavaScript from '../Images/javascript.svg';
import React from '../Images/React.png';
import './Home-module.css';

function Main() {
    
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()
    var day = today.getDate()

    {

        ((month < 1) || (month === 1 && day < 16))?(
        
            year--

        ) : (

            console.log(year)   

        )

    }
    
    var myAge = (year-2007)

  return (
    
    <main>

        <div className="main-part-1">

            <img className="main-img" alt="Backgroud" src={internetPicture} />

            <h1 className="main-title"> Hello World </h1>

        </div>

        <div className="main-part-2">

            <h3 className="main-title-2"> Meu nome é Victor Lis </h3>

            <h4 className="main-text-body" id="my-years-old"> Tenho {myAge} anos e estou estudando programação, e este site é apenas um de meus projetos, dentro desse mundo tão amplo que é a programação pretendo trabalhar na área Front-End, mas também gostaria de ter um mínimo entendimento Back-End. </h4>

            <h4 className="main-subtitle-2"> Minhas linguagens / frameworks favoritos: </h4>

            <div className="main-row">

                <div className="main-collunm">

                    <h4 className="main-collunm-text"> JavaScript </h4>
                    <img className="main-collumn-img" alt="JS" src={JavaScript} />

                </div>

                <div className="main-collunm">

                    <h4 className="main-collunm-text"> React </h4>
                    <img className="main-collumn-img" alt="React" src={React} />

                </div>

            </div>

        </div>

    </main>

  );

}

export default Main;
