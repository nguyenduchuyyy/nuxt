export default function (context) {
  if (context.store.getters.isAuth == false) {
    context.redirect('/login')
  }
}
