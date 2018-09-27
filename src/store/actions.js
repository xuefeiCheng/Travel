export default{
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
