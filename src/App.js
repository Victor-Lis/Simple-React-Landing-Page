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

    if(page=='home'){
        
      setPage('my-projects')
      setNavTitle('Início')
      console.log(page)

    }else{

      setPage('home')
      setNavTitle('Meus Projetos')
      console.log(page)

    }

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
