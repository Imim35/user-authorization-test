export default {
  data() {
    return {
      initialized: false
    }
  },
  methods: {

    // Базовая инициализация
    // вызывается если базовая инициализация компонента не реализована.
    async initialize() {
      return true
    },
  },

  // Запуск инициализации окна при открытии.
  // Инициализация компонента.
  async created() {
    try {
      await this.initialize()
        .then(async () => {

          // Установка значения завершения инициализации.
          this.initialized = true;

          // Событие загрузки popup
          this.$emit('loaded')

        })
    }
      // Отображение уведомления ошибки
    catch (e) {
      this.$notification.show('error', e.message)
    }
  },

  // Отписка от событий при закрытии окна.
  beforeDestroy() {
    this.initialized = false
  }

}
