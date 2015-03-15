var Router = function(url) {
    this.canPushState = (window.history && window.history.pushState && window.history.replaceState);
    this.current = location.pathname;
    console.log(location.href);
};
Router.prototype = {
    setURL: function(url) {
        this.current = url
    },
    start: function() {
        console.log(this.current);
    }
};
module.exports = Router;