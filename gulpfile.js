var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var serve = require('gulp-serve');

var paths = {
    scripts: ["./src/js/**/*.js", "./src/js/**/*.jsx"]
}

gulp.task("scripts", function() {
    gulp.src("./src/js/main.js")
        .pipe(browserify({
            transform: ["reactify"],
            debug: true
        }))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("./src/dist"));
});

gulp.task("watch", function() {
    gulp.watch(paths.scripts, function() {
        gulp.run("scripts");
    });
});

gulp.task("serve", serve({
    root: "./src",
    port: 8080
}));

gulp.task("dev", ["watch", "serve"]);

gulp.task("default", ["scripts"]);
