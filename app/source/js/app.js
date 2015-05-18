var app = angular.module('app', [
    'ui.router'
]).config(config);

config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'
];
function config($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/");
    // Routing
    $stateProvider
        .state('/', {
            // empty page
            url: '/'
        })
        .state('about', {
            url: '/about',
            controller: require('./components/about/AboutCtrl'),
            controllerAs: 'about',
            templateUrl: './about.html'
        });
    $locationProvider.hashPrefix('!');

    // Dummy DOM element for view filtering
    var dummy = document.createElement('div');
    $httpProvider.interceptors.push(
        function () {
            return {
                response: function(response) {
                    // contentType text/html = view files
                    if (response.config.headers.Accept === 'text/html') {
                        dummy.innerHTML = response.data;
                        // select element of having ui-view attribute
                        var view = dummy.querySelector('[ui-view]');
                        if (view) {
                            // Change response data
                            response.data = view.innerHTML;
                        }
                    }
                    return response;
                }
            };
        }
    );
}
app.controller('RootCtrl', require('./components/root/RootCtrl'));
angular.bootstrap(document, ['app'], {
    strictDi: true
});