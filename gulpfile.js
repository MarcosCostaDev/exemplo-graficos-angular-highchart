var gulp = require("gulp")
    , jshint = require("gulp-jshint")
    , jshintstylish = require("jshint-stylish")
    , clean = require("gulp-clean")
    , concat = require("gulp-concat")
    , htmlReplace = require("gulp-html-replace")
    , uglify = require("gulp-uglify")
    , browserSync = require("browser-sync");


gulp.task("default", ['copy'], function () {
    gulp.start("build-js", "build-html", "server-producao");
});

gulp.task("copy", ["clean"], function () {
    return gulp.src("public/**/*")
        .pipe(gulp.dest("docs"));
});

gulp.task("clean", function () {
    return gulp.src("docs")
        .pipe(clean());
});


gulp.task("build-js", function () {

    return gulp.src(
        [
            "docs/js/lib/jquery.min.js",
            "docs/js/lib/angular.min.js",
            "docs/js/lib/angular-route.min.js",
            "docs/js/lib/highcharts.src.js",
            "docs/js/lib/highstock.src.js",
            "docs/js/lib/highcharts-ng.js",
            "docs/js/lib/highcharts-more.js",
            "docs/js/lib/funnel.js",
            "docs/js/app.js",
            "docs/js/controllers/principal-controller.js",
            "docs/js/controllers/*.js"

        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest("docs/js"))

});


gulp.task("build-html", function () {

    gulp.src("docs/**/*.html")
        .pipe(htmlReplace({
            js: "js/all.js"
        }))
        .pipe(gulp.dest("docs"))

});


gulp.task("delete-controllers-js", function () {

    return gulp.src('docs/js/controllers', {read: false})
        .pipe(clean());

});


gulp.task("delete-lib-js", function () {

    return gulp.src('docs/js/lib', {read: false})
        .pipe(clean());

});


gulp.task("delete-files-js", function () {

    return gulp.src('docs/js/app.js', {read: false})
        .pipe(clean());

});



gulp.task("server", function () {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    })
});


gulp.task("server-producao", function () {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    })
});


gulp.watch("public/js/**/*.js").on("change", function (event) {
    gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintstylish));
});

gulp.watch("public/**/*").on("change", browserSync.reload);





