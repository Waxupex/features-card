const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

compilarSass = (done) =>{
    src('src/scss/**/*.scss')
        .pipe(sass())
            .pipe(dest('build/css'));
    console.log('Codigo SASS compilado correctamente');
    done();
}

dev = (done) =>{
    watch('src/scss/**/*.scss',compilarSass);
    done();
}

exports.dev = dev;