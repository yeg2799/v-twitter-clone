module.exports = {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'main',
          path: '/home',
          component: resolve('pages/index'),
        },
      );
    },
  };
  