var gulp = require("gulp")
    , jshint = require("gulp-jshint")
    , jshintstylish = require("jshint-stylish")
    , clean = require("gulp-clean")
    , concat = require("gulp-concat")
    , htmlReplace = require("gulp-html-replace")
    , uglify = require("gulp-uglify")
    , browserSync = require("browser-sync");


gulp.task("default", ['copy'], function () {
    gulp.start("build-js", "build-html");
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

    gulp.src(
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
            "docs/js/controller/principal-controller.js",
            "docs/js/controller/grafico-amas-by-case-manager-controller.js",
            "docs/js/controller/grafico-amas-by-case-manager-percent-controller.js",
            "docs/js/controller/grafico-bar-controller.js",
            "docs/js/controller/grafico-campaign-step-downs-controller.js",
            "docs/js/controller/grafico-column-controller.js",
            "docs/js/controller/grafico-current-census.js",
            "docs/js/controller/grafico-step-down-by-cm-controller.js",
            "docs/js/controller/grafico-step-down-new-clients-percent-controller.js",
            "docs/js/controller/grafico-total-detox-amas-controller.js",
            "docs/js/controller/grafico-total-detox-amas-percent-controller.js",
            "docs/js/controller/grafico-total-detox-clients-treatment-controller.js",
            "docs/js/controller/total-new-clients-controller.js"

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





