<template lang='pug'>
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            a.header-logo(href='index.html') Calendar
            router-link.header-logo(
              to="/"
            )
            .button-burger(
              @click="menuShow = !menuShow"
              :class="{active : menuShow}"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper(
              :class="{active : menuShow}"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow = false"
                )
                  router-link.navbar-link(
                    :to="`${link.url}`"
                  ) {{link.title}}

    .container
      router-view
</template>

<script>
export default {
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Task', url: '/task'},
        {title: 'Login', url: '/login'},
        {title: 'Registrarion', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../node_modules/uimini/src/stylus/main.styl'

</style>
