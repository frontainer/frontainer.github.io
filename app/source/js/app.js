//window.Router = require('./route/route');

var navi = document.getElementById('js-navi');
var navicon = document.getElementById('js-navicon');
navicon.addEventListener('click', function() {
    navi.classList.toggle('show');
    this.classList.toggle('on');
});