var gulp = require('gulp');
var httproxy = require('http-proxy-middleware');
var connect = require('gulp-connect');

var beProxy = httproxy('/webjson', {
  target: 'http://192.168.4.94:8081/'
});

gulp.task('connect', function(){
    connect.server({
      port: 80,
      root: './web',
      middleware: function(connect, opt){
        return [beProxy];
      }
    });
});