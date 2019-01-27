import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Test from './components/Test';

class App extends Component {
  testRoute = () => {
    this.props.history.push('/test?name=JD&age=34');
  }

  render() {
    return (
      <div>
        <button onClick={this.testRoute}>Test Route with Params</button>

        <Route path="/test" component={Test} />

      </div>
    )  }  }
export default withRouter(App);
