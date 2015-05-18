RootCtrl.$inject = [];
function RootCtrl() {
    this.menuVisible = false;
    this.toggleMenu = toggleMenu;
    function toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
}
module.exports = RootCtrl;