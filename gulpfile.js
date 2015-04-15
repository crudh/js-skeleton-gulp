var gulp = require("gulp");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var serve = require('gulp-serve');

var paths = {
    dist: "./src/bundle",
    scripts: ["./src/app/**/*.js", "./src/app/**/*.jsx"]
}

gulp.task("scripts", function() {
    gulp.src("./src/app/main.js")
        .pipe(browserify({
            transform: ["reactify"],
            debug: true
        }))
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest(paths.dist));
});

gulp.task("watch", function() {
    gulp.watch(paths.scripts, ["scripts"]);
});

gulp.task("serve", serve({
    root: "./src",
    port: 8080
}));

gulp.task("build", ["scripts"]);

gulp.task("dev", ["build", "watch", "serve"]);

gulp.task("default", ["build"]);
