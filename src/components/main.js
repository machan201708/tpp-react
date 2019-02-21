import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FilmPage from "./containers/films/film-page";
import ShowPage from "./containers/shows/show-page";
import UserCenter from "./containers/user/user-center";
import Home from "./containers/home/home";
import VideosPage from "./containers/videos/videos-page";

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/film' component={FilmPage}></Route>
        <Route exact path='/videos' component={VideosPage}></Route>
        <Route exact path='/shows' component={ShowPage}></Route>
        <Route exact path='/user' component={UserCenter}></Route>
      </Switch>
    );
  }
}

export default Main;