export default {
  data() {
    return {
      initialized: false
    }
  },
  methods: {

    // Basic initialization
    async initialize() {
      return true
    },
  },

  // Component initialization.
  async created() {
    try {
      await this.initialize()
        .then(async () => {

          // Sets the initialization complete value.
          this.initialized = true;

          // Popup load event
          this.$emit('loaded')

        })
    }
      // Display error notification
    catch (e) {
      this.$notification.show('error', e.message)
    }
  },

  beforeDestroy() {
    this.initialized = false
  }

}
