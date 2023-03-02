<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <button id="btn-logout" @click="$store.dispatch('logout')">Logout</button>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
* {
  margin: 3;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: blue;
}

#btn-logout {
  border: none;
	background-color: blue;
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
  margin-top: 4;
	text-transform: uppercase;
}

</style>
