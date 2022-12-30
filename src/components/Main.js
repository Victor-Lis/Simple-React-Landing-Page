import internetPicture from '../Images/Internet Picture.jpg';
import JavaScript from '../Images/javascript.svg';
import React from '../Images/React.png';
import './Main-module.css';

function Main() {
    
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()
    var day = today.getDate()

    if(month < 1 || month == 1 && day < 16){

        year--

    }
    
    var myAge = (year-2007)

  return (
    
    <main>

        <div className="main-part-1">

            <img className="main-img" alt="Backgroud Image" src={internetPicture} />

            <h1 className="main-title"> Hello World </h1>

        </div>

        <div className="main-part-2">

            <h3 className="main-title-2"> My name is Victor Lis </h3>

            <h4 className="main-text-body" id="my-years-old"> I'm {myAge} years old and I'm studyng programming, this website is a someone of my projects, I intend to work more on the front end. </h4>

            <h4 className="main-subtitle-2"> My favorites languages / frameworks </h4>

            <div className="main-row">

                <div className="main-collunm">

                    <h4 className="main-collunm-text"> JavaScript </h4>
                    <img className="main-collumn-img" alt="JS Image" src={JavaScript} />

                </div>

                <div className="main-collunm">

                    <h4 className="main-collunm-text"> React </h4>
                    <img className="main-collumn-img" alt="React Image" src={React} />

                </div>

            </div>

        </div>

    </main>

  );

}

export default Main;
