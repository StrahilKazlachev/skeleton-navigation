export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'default', redirect: 'nav/a' },

      // { route: '', name: 'default', redirect: 'static' },
      // { route: 'static', name: 'static', moduleId: 'dynamic-a' },
      
      {
        route: 'nav/:alias', name: 'dynamic', navigationStrategy: instruction => {
          instruction.config.moduleId = `dynamic-${instruction.params.alias}`;
          instruction.config.href = instruction.fragment;
          if (instruction.config.viewPorts && instruction.config.viewPorts.default) {
            instruction.config.viewPorts.default.moduleId = instruction.config.moduleId;
          }
        }
      }
    ]);
    // config.mapUnknownRoutes(instruction => {
    //   return 'dynamic-a';
    // });
    this.router = router;
  }
}
