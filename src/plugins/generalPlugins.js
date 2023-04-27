export default {
    install(app) {
      app.config.globalProperties.$linkExecution = function(isWebPage, srcPath) {
        if (isWebPage) {
            window.open(srcPath, '_blank')
        } else {
            this.$router.push(srcPath)
        }
      }
    },
  }