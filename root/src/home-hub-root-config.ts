import { registerApplication, start, type LifeCycles } from "single-spa";

registerApplication({
  name: "@home-hub/navbar",
  app: () => System.import<LifeCycles>("@home-hub/navbar"),
  activeWhen: ['/'],
  customProps: {
    isLocal: () => {
      return window.location.hostname === 'localhost';
    }
  }
});

registerApplication({
  name: "@home-hub/home",
  app: () => System.import<LifeCycles>("@home-hub/home"),
  activeWhen: (location) => location.pathname.startsWith("/home"),
});

registerApplication({
  name: "@home-hub/dashboard",
  app: () => System.import<LifeCycles>("@home-hub/dashboard"),
  activeWhen: (location) => location.pathname.startsWith("/dashboard"),
});

registerApplication({
  name: "@home-hub/lights",
  app: () => System.import<LifeCycles>("@home-hub/lights"),
  activeWhen: (location) => location.pathname.startsWith("/lights"),
});

registerApplication({
  name: "@home-hub/user",
  app: () => System.import<LifeCycles>("@home-hub/user"),
  activeWhen: (location) => location.pathname.startsWith("/user"),
});

start({
	urlRerouteOnly: true,
});
