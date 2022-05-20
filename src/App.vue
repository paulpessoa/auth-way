<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAuth } from 'firebase/auth'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      getAuth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path === '/login' || route.path === '/register') {
          router.replace('/')
        }
      })
    })
  }
}
</script>

<style lang="scss">
body {
  background: #2c3e50;
  color: #fff;
}

#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
}
</style>
