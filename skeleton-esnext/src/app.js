export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      {
        route: 'nav/:alias', name: 'dynamic', navigationStrategy: instruction => {
          instruction.config.moduleId = `dynamic-${instruction.params.alias}`;
          instruction.config.href = instruction.fragment;
        }
      }
    ]);

    this.router = router;
  }
}
