import Popup from './components/Popup'

const PopupPlugin = {
  install(Vue) {
    Vue.component('Popup', Popup)
    Vue.prototype.$popup = {
      show(popup) {
        let component = async () => await import(`@/views/popups/${popup}.vue`)

        Vue.prototype.$bus.$emit('popup:show', { component })

        return component
      }
    }
  }
};

export default PopupPlugin;
