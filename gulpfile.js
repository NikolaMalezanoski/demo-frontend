'use strict';

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');


function compileSass(done) {
	src('scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('css/'));
	done();
}

function watchSass() {
	watch('scss/*.scss', compileSass);
}

exports.compileSass = compileSass;
exports.watchSass = watchSass;
