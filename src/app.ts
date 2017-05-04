import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['/', 'home'],       name: 'home',       moduleId: 'components/home' },
      { route: ['/', 'about'],       name: 'about',       moduleId: 'components/about' },
    ]);
  }
}