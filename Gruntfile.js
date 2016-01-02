module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
      less: {
        files: ['app/css/less/*.less'],
        tasks: ['less']
      }
    },

    less: {
      development: {
        files: {
          "app/css/common.css": "app/css/less/common.less",
          "app/css/media.css": "app/css/less/media.less"
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);
  grunt.registerTask('w', ['watch']);

};