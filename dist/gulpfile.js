const gulp = require("gulp");

//server tasks
gulp.task("main", function () {
    var src = ["src/**/*.ts", 'package.json'],
        dest = "release";
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

// gulp.task("server", function () {
//     var src = ['./server/**/*.js','./server/env.json'],
//         dest = "./release/server";
//     return gulp.src(src)
//         .pipe(gulp.dest(dest));
// });

gulp.task("default",['main'],function () {
    console.log('finished!');
});