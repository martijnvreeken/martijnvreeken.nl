module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap: true,
        sourceMapName: 'main.map',
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'src/js/jquery.1.11.1.js',
          'src/js/jquery.counterup.js',
          'src/js/jquery.isotope.js',
          'src/js/jquery.prettyPhoto.js',
          'src/js/bootstrap.js',
          'src/js/easypiechart.js',
          'src/js/SmoothScroll.js',
          'src/js/waypoints.js',
          'src/js/main.js'
        ],
        dest: 'main.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'style.min.css': ['src/css/*.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
