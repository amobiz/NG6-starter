class AppController {
  constructor($mdSidenav) {
    "ngInject";
    this.name = 'app';
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('left').toggle();
  }
}

export default AppController;
