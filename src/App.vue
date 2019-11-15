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

<style lang="scss">
  .mh-full {
    min-height: 100%;
  }

  .text-black {
    color: #363636;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .relative {
    position: relative;
  }

  .m-progress {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    border-radius: 3px;
    background-color: #f5f5f5;
    height: 35px; 

    &__label,
    &__percentage {
      position: absolute;
      color: #333;
      top: 50%;
      transform: translate(0, -50%);
      margin-left: 10px;
    }

    &__percentage {
      right: 0;
      margin-right: 10px;
    }

    &__fill {
      box-sizing: border-box;
      padding: 10px;
      border-radius: 3px;
      background-color: #28a745;
      height: 100%;
      box-shadow: inset 0 -1px rgba(0, 0, 0, .15);
      transition: width 500ms ease;
      opacity: .6;

      &--finished {
        opacity: 1;
      }

      &--failed {
        transition: none;
        width: 100% !important;
        background-color: #c82333;
      }
    }
  }
</style>