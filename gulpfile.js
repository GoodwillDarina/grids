const gulp = require("gulp");
const uglify = require("gulp-uglify");
const stylus = require("gulp-stylus");
const nib = require("nib");
const plumber = require("gulp-plumber");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const posthtml = require("gulp-posthtml");
const htmlmin = require('gulp-htmlmin');
const include = require("posthtml-include");
const del = require("del");
const run = require('run-sequence');
const server = require("browser-sync").create();

gulp.task("clean", function() {
  del.sync(["./build"]);
  console.log("[--------] script folder was deleted");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/images/**",
    "source/js/**"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  return gulp.src("source/styles/styles.styl")
    .pipe(plumber())
    .pipe(stylus({
      "paths": ["node_modules", "source/styles"],
      "import": ["nib", "stylus-type-utils"],
      "use": [nib()],
      "include css": true
    }))
    .pipe(gulp.dest("build/css"))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("scripts", function() {
  return gulp.src("source/script.js")
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
});

gulp.task("libs", function() {
  return gulp.src([
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/normalize.css/normalize.css",
    "source/libs/**"
  ])
    .pipe(gulp.dest("build/libs"))
});

gulp.task("images", function() {
  return gulp.src("source/images/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/images"))
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "libs",
    "style",
    "images",
    "scripts",
    "html",
    done
  );
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    port: 9009
  });

  gulp.watch("source/styles/**/*.styl", ["style"]);
  gulp.watch("source/js/*.js", ["scripts"]);
  gulp.watch("source/*.html", ["html"]);
});
