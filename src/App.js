import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums'
import AlbumDetails from './components/AlbumDetails'
import Home from './components/Home'
import PostAlbum from './components/PostAlbum'
import PostReview from './components/PostReview'

function App() {

  return (
    <div>
        <Switch>
          {/* <Route exact path='/' component={() => <Home /> } /> */}
          <Route exact path='/albums' component={() => <Albums /> } />
          <Route exact path='/albums/:id' render={(routerProps) => <AlbumDetails match={routerProps.match}/> } />
          {/* <Route exact path='/albums/create' render={() => <PostAlbum /> } /> */}
          {/* <PostAlbum /> */}

         
        </Switch> 
      
    </div>
  );

}

export default App;
