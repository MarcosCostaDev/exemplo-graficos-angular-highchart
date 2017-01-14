var gulp = require("gulp")
    , jshint = require("gulp-jshint")
    , jshintstylish = require("jshint-stylish")
    , browserSync = require("browser-sync");


gulp.task("server", function () {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    })
});

gulp.watch("public/js/**/*.js").on("change", function (event) {
    gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintstylish));
});

gulp.watch("public/**/*").on("change", browserSync.reload);





