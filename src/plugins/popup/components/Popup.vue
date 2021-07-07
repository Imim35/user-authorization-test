<template>
  <div class="popup">
    <transition name="fade-popup"><div v-if="active" class="popup__bgc" @mousedown="close"></div></transition>
    <transition name="fade-popup">
      <component ref="popup-component" class="popup__component" v-show="show" :is="popup.component" @close="close" @loaded="loaded"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data: function () {
    return {
      active: false,
      show: false,
      popup: {
        component : null
      }
    }
  },
  created() {
    this.$bus.$on('popup:show', ({ component }) => {
      this.popup = { component }
    })
  },
  methods: {
    close() {
        this.active           = false
        this.show             = false
        this.popup.component  = null
    },
    loaded() {
      this.active = true
      setTimeout(() => { this.show = true }, 200)
    }
  }
}
</script>

<style lang="scss">
.popup {
  &__bgc {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    outline: 0;
    display: block;
    background-color: rgba(0,0,0,0.5);
  }
  &__component {
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    z-index: 1060;
  }
}

.fade-popup-enter-active, .fade-popup-leave-active {
  transition: opacity .2s;
}
.fade-popup-enter, .fade-popup-leave-to {
  opacity: 0;
}
</style>
