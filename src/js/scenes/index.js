import React from 'react';

import About from './about';
import Contact from './contact';
import Home from './home';
import Resume from './resume';

export default props => (
  <React.Fragment>
    <About {...props} />
    <Contact {...props} />
    <Home {...props} />
    <Resume {...props} />
  </React.Fragment>
);
