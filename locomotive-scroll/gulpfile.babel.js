import gulp from 'gulp';
import styles from './build/styles.js.js';
import scripts from './build/scripts.js.js';
import svgs from './build/svgs.js.js';
import serve from './build/serve.js.js';
import watch from './build/watch.js.js';
import copy from './build/copy.js.js';
import { buildStyles, buildScripts } from './build/build.js.js';

const compile = gulp.series(styles, scripts, svgs);
const main = gulp.series(copy, compile, serve, watch);
const build = gulp.series(copy, compile, buildStyles, buildScripts);

gulp.task('default', main);
gulp.task('compile', compile);
gulp.task('build', build);
gulp.task('copy', copy);
