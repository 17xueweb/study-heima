<template>
<div id="app">
     <catagtory/>
     <new-list></new-list>
    </div>
</template>

<script>
import Catagtory from './components/catagtory'
import NewList from './components/new-list'
export default {
  name: 'App',
  components: {
    Catagtory,
    NewList
  }
}
</script>

<style>

</style>
