var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
            <RouteHandler/>
            </div>
        );
    }
});

var Home = React.createClass({
    //mixins: [ require("./demo/flux/pages/home.async").Mixin ],
    render: function() {
        return <p>Home Loading...</p>;
    }
});

var Next = React.createClass({
    //mixins: [ require("./demo/flux/pages/next.async").Mixin ],
    render: function() {
        return <p>Next Loading...</p>;
    }
});


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="next" handler={Next}/>
    </Route>
);

Router.run(routes, /*Router.HistoryLocation,*/ function (Handler) {
    React.render(<Handler/>, document.body);
});