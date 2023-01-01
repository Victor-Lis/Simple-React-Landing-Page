import {useState} from 'react'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState('home')
  const [navTitle, setNavTitle] = useState('My Projects') 
  
  function changePage(){

    {(page=='home') ? (
        
      setPage('my-projects'),
      setNavTitle('Home'),
      console.log(page)

    ) : (

      setPage('home'),
      setNavTitle('My Projects'),
      console.log(page)

    )}

  }

  return (
    <div className="body">
      <Nav page={page} navTitle={navTitle} changePage={changePage}/>
      {(page == 'home') ?(
        
        <Home />
  
      ) : (
  
        <Projects />
  
      )}
      <Footer />
    </div>
  );
}

export default App;
