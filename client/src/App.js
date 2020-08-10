import React from 'react';

// import Chat from './components/Chat/Chat';
// import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {
  return (
    <Router>
      { <Route path="/" exact component={WelcomePage} />
      /*<Route path="/chat" component={Chat} /> */}
    </Router>
  );
}

export default App;