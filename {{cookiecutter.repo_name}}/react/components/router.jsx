/* global gettext */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var useRouterHistory = ReactRouter.useRouterHistory;
var createHashHistory = require('react-router/node_modules/history/lib/createHashHistory');

// Components
var App = require('./app.jsx');
var Home = require('./home.jsx');


var NotFoundRoute = React.createClass({
  render: function () {
    return (<div>{gettext('NOT FOUND')}</div>);
  }
});

var appHistory = useRouterHistory(createHashHistory)({queryKey: false});
var mainContainer = document.getElementById('app-place');
var language = mainContainer.attributes['data-language'].value;

ReactDOM.render((
  <Router history={appHistory}>
    <Route component={App} language={language}>
      <Route path="/" component={Home}/>
      <Route path="*" component={NotFoundRoute}/>
    </Route>
  </Router>), mainContainer);
