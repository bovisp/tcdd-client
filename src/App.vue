<template>
  <div id="app">
    <top-nav />
    <router-view/>
  </div>
</template>

<script>
  import TopNav from '@/components/nav/TopNav'

  export default {
    components: {
      TopNav
    }
  }
</script>

<style>
  .mh-full {
    min-height: 100%;
  }

  .text-black {
    color: #363636;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }
</style>