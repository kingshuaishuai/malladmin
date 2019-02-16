import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

//布局
import Layout from 'components/layout/index.jsx'
// 页面
import Home from 'page/home/index.jsx'

class App extends  React.Component{
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Home} />
            <Route exact path="/product.category" component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)