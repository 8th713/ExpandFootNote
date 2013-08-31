module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      manifest: {
        options: {
          processContent: function(content) {
            return grunt.template.process(content);
          }
        },
        src: ['manifest.json'],
        dest: 'dist/manifest.json'
      }
    },
    watch: {
      manifest: {
        files: 'manifest.json',
        tasks: ['copy']
      }
    },
    packaging: {
      release: {
        src: 'dist',
        dest: 'ExpandFootNote', // 拡張子を除いたファイル名
        options: {
          alias: ['<%= pkg.version %>'] // コピー作成
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('tasks');

  grunt.registerTask('release', ['copy', 'packaging']);
  grunt.registerTask('default', ['copy', 'watch']);
};
