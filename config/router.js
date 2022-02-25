module.exports = {
  middleware: ['trailingSlash'],
  extendRoutes(routes, resolve) {
    routes.splice(0, routes.length);
    routes.push(
      {
        name: 'main-page',
        path: '/home',
        component: resolve('pages/index'),
      },
      {
        name: 'explore-page',
        path: '/explore',
        component: resolve('pages/explore'),
      },
    );
  },
};
