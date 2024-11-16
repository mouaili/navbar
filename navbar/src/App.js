import Navbar from './components/menu/Navbar';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Tutorials from './components/Tutorials';
import './App.css';
import MyRelations from './components/experiences/MyRelations';
import MyLife from './components/experiences/MyLife';
import Articles from './components/articles/Articles';
import News from './components/articles/News';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Navbar />
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/blog">
              <Blog />
              <Route path="/blog/my-relations" component={MyRelations} />
              <Route path="/blog/my-activities" component={MyLife} />
              <Route path="/blog/the-news/:id" component={News} />
              <Route path="/blog/articles/:id" component={Articles} />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Routes>
    </div>
  );
}

export default App;
