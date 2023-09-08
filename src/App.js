import React, { Component } from 'react';
import './App.scss';
import { Button, Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import FeedBackPage from './content/FeedBack';


class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <BrowserRouter>
  <Theme theme="g100">
    <TutorialHeader />
  </Theme>
  <Content>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/repos" component={RepoPage} />
      <Route path="/feedback" component={FeedBackPage} />
    </Switch>
  </Content>
</BrowserRouter>

        
      </>
    );
  }
}



// import React, {Component} from "react";
// import { Button } from '@carbon/react';
// import { Add } from '@carbon/react/icons';
// // import {Button, Content, Header, HeaderMenuItem, HeaderName, HeaderNavigation} from "carbon-components-react"
// import './App.scss';

// function App() {
//   return (
//   <div>
//       Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
//   tutorial.
//      <Button>Example usage</Button>
//     <Add  size="24" />
//   </div>
//   )
 
  // return (
  //   <div>
  //    <Header>
  //     <HeaderName href="#">Tacos</HeaderName>
  //     <HeaderNavigation aria-label="IBM [Platform]">
  //     <HeaderMenuItem href="#"> Menu </HeaderMenuItem>
  //     <HeaderMenuItem href="#"> Ingredients </HeaderMenuItem>
  //     <HeaderMenuItem href="#"> Locations </HeaderMenuItem>
  //     </HeaderNavigation>
  //    </Header>

  //   <Content id="main-content">
  //   <Button kind="secondary">
  //     Add Taco
  //     </Button>
  //   </Content>
  //   </div>
  // );
// }

export default App;
