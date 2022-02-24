export default function ({ route, redirect }) {
  // route / ise direk home'a yönlendiriyor
  if (route.path === '/') {
    return redirect('/home');
  }
}
