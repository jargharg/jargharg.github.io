var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	del = require("del"),
	usemin = require("gulp-usemin"),
	rev = require("gulp-rev"),
	cssnano = require("gulp-cssnano"),
	uglify = require("gulp-uglify"),
	browserSync = require("browser-sync").create();

gulp.task("deleteAssetsFolder", function() {
	return del(["./assets", "index.html"]);
});

gulp.task("optimiseImages", ["deleteAssetsFolder"], function() {
	return gulp.src(["./app/assets/images/**/*", "!.app/assets/images/icons", "!.app/assets/images/icons/**/*"])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./assets/images"))
})

gulp.task("useminTrigger", ["deleteAssetsFolder"], function(){
	gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts"], function() {
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function(){return rev()}, function(){return cssnano()}],
		js: [function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./"));
});

gulp.task("build", ["deleteAssetsFolder", "optimiseImages", "useminTrigger"]);