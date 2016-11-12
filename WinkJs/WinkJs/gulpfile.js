"use strict";

var gulp = require('gulp');

gulp.task("MoveJsLibraiesToWWWLib", function() {
    gulp.src(['./node_modules/systemjs/dist/*'])
         .pipe(gulp.dest('./www/scripts/lib/systemjs'));
    gulp.src(['./node_modules/rxjs/**/*.js'])
         .pipe(gulp.dest('./www/scripts/lib/rxjs'));
    gulp.src(['./node_modules/core-js/client/*'])
         .pipe(gulp.dest('./www/scripts/lib/core-js'));
    gulp.src(['./node_modules/zone.js/dist/*'])
        .pipe(gulp.dest('./www/scripts/lib/zone.js'));
    gulp.src(['./node_modules/reflect-metadata/reflect.js'])
      .pipe(gulp.dest('./www/scripts/lib/reflect-metadata'));
    gulp.src(['./node_modules/@angular/core/bundles/core.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/core'));
    gulp.src(['./node_modules/@angular/common/bundles/common.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/common'));
    gulp.src(['./node_modules/@angular/compiler/bundles/compiler.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/compiler'));
    gulp.src(['./node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/platform-browser'));
    gulp.src(['./node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/platform-browser-dynamic'));
    gulp.src(['./node_modules/@angular/http/bundles/http.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/http'));
    gulp.src(['./node_modules/@angular/router/bundles/router.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/router'));
    gulp.src(['./node_modules/@angular/forms/bundles/forms.umd.min.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular/forms'));
    gulp.src(['./node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'])
      .pipe(gulp.dest('./www/scripts/lib/angular-in-memory-web-api/angular-in-memory-web-api'));
});

