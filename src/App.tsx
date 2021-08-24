import React, { Switch, Route, Link } from "react-router-dom";
import PostAdd from './components/PostAdd';
import PostEdit from './components/PostEdit';
import PostList from './components/PostList';
import "./stylesheets/App.scss";

const App = () => {
  return (
    <div className="App">
      <nav className="header-nav">
        <Link to="/">
          Wefox-Club
        </Link>
        <ul className="header-list">
          <li className="header-list">
            <Link to={"/add"} className="header-item">
              Add Post
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-container">
        <div className="main">
          <Switch>
            <Route exact path="/add" component={PostAdd} />
            <Route path="/:id" component={PostEdit} />
            <Route component={PostList} />
          </Switch>
        </div>
      </div>

      <footer>
        Copyright (C) 2021 Tor3m
      </footer>
    </div>
  );
}

export default App;