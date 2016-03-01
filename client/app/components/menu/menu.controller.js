class MenuController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'menu';
	this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('left').toggle();
  }
}

export default MenuController;
