import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FilmPage from "./containers/films/film-page";
import ShowPage from "./containers/shows/show-page";
import UserCenter from "./containers/user/user-center";
import Home from "./containers/home/home";
import VideosPage from "./containers/videos/videos-page";
import MyCinemaTickets from "./containers/user/my-cinema-tickets";
import MyShowTickets from "./containers/user/my-show-tickets";
import MyCoupon from "./containers/user/my-coupon";
import MyCards from "./containers/user/my-cards";

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/film' component={FilmPage}></Route>
        <Route path='/videos' component={VideosPage}></Route>
        <Route path='/shows' component={ShowPage}></Route>
        <Route path='/user' component={UserCenter}></Route>
      </Switch>
    );
  }
}

export default Main;