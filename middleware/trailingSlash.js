export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path.endsWith('/')) {
    redirect(301, route.path.slice(0, -1));
  }
}
