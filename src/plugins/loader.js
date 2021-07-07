import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);

export default {
  install(Vue) {
    Vue.prototype.$loader = {
      loaders: [],
      show(options = {}) {
        return Vue.$loading.show({
          container: ('container' in options) ? options.container : null,
          'backgroundColor': ('backgroundColor' in options) ? options['backgroundColor'] : '#fff',
          'enforce-focus': false,
          loader: 'dots',
          color: '#006fe6',
          width: ('width' in options) ? options.width : 60,
          height: ('height' in options) ? options.height : 60,
          opacity: ('opacity' in options) ? options.opacity : 0.6,
          blur: '0px'
        });
      }
    }
  }
}

