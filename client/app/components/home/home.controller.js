class HomeController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'home';
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('left').toggle();
  }
}

export default HomeController;
