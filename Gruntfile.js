module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-6to5");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    "6to5": {
      options: {
        modules: 'common'
      },
      build: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'tmp/'
        }]
      }
    },
    jshint: {
      options:{
        esnext: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    docco: {
      documentation: {
        src: ['src/**/*.js'],
        options: {
          output: 'docs/'
        }
      }
    },
    jasmine: {
      default: {
        src: 'dist/screeps_ai.js',
        options: {
          specs: 'spec/*Spec.js',
          keepRunner: true
        }
      }
    },
    browserify: {
      default:{
        src: ['tmp/**/*.js'],
        dest: 'dist/screeps_ai.js'
      }
    }
  });
  grunt.registerTask("build",["jshint:all","6to5","browserify","jasmine"]);
  grunt.registerTask("test",["jshint:all","jasmine"]);
  grunt.registerTask("docs",["docco:documentation"]);
  grunt.registerTask("default", ["build"]);
};
