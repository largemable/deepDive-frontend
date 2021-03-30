import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums'
import AlbumDetails from './components/AlbumDetails'
import Home from './components/Home'
// import Nav from './components/Nav'
// import APIurl from './config'
// import axios from 'axios'

function App() {

  return (
    <div>
        <Switch>
          <Route exact path='/' component={() => <Home /> } />
          <Route exact path='/albums' component={() => <Albums /> } />
          <Route exact path='/albums/:id' render={(routerProps) => <AlbumDetails match={routerProps.match}/> } />
          {/* <Route exact path='/createPost' component={() => <CreatePost /> } /> */}
        </Switch> 
      
    </div>
  );
}

export default App;
