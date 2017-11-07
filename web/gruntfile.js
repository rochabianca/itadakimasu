
module.exports = function(grunt) {
  // var mozjpeg = require('imagemin-mozjpeg');
      // 1. All configuration goes here 
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          
          imagemin: {
            options: {
              optimizationLevel: 7,
              //  use: [ mozjpeg() ]
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img-src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        // inlinecss: {
        //   main: {
        //     options: {
        //        webResources: {
        //          images: false,
        //        },
        //     },
        //     files: {
        //       'template-inline.html': 'template.html'
        //     }
        //   }
        // },

        watch: {
          livereload: {
            options: {
              livereload: true
            },
            files: [
              '*.html',
              'combos.html',
              'css/style.min.css',
              'img/*.{png,jpg,gif}'
            ],
          },
          images: {
            files: ['img-src/*.{png,jpg,gif}' ],
            tasks: ['imagemin'],
            options: {
            spawn: false,
            }
          },
          // css: {
          //   files: ['css/*.css'],
          //   tasks: ['inlinecss']
          // },
          options: {
            spawn: false,
            }
      }
  
      });
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      // grunt.loadNpmTasks('grunt-inline-css');

      grunt.registerTask('default', ['watch']);
  
  };