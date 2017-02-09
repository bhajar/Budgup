var gulp = require("gulp");
var codacy = require("gulp-codacy");
var gulpIf = require("gulp-if");
var sequence = require("gulp-sequence");
var coveralls = require("./server/coveralls/coveralls.js");
var sonar = require("gulp-sonar");
var util = require('util');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');



// Coveralls
gulp.task('coveralls1', function() {
    return gulp.src('./coverage/lcov.info')
        .pipe(coveralls());
});


gulp.task('coveralls', ['test'], function () {
    if (!process.env.CI) {
        return;
    }

    return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
        .pipe(coveralls());
});

//Codacy

gulp.task('codacy', function sendToCodacy() {
    return gulp
        .src(['coverage/coverage.lcov'])
        .pipe(gulpIf(!!process.env.TRAVIS, codacy({
            token: '2dfdf24f7c8c47e79e1c6ca4c46ed44b'
        })))
        ;
});

// Sonar

gulp.task('sonar', function () {
    var options = {
        sonar: {
            host: {
                url: 'http://localhost:9000'
            },
            jdbc: {
                url: 'jdbc:mysql://localhost:3306/sonar',
                username: 'sonar',
                password: 'sonar'
            },
            projectKey: 'sonar:budgup:0.0.1',
            projectName: 'Budgup',
            projectVersion: '0.0.1',
            // comma-delimited string of source directories
            sources: 'client/js,server/*',
            language: 'js',
            sourceEncoding: 'UTF-8',
            javascript: {
                lcov: {
                    reportPath: 'test/sonar_report/lcov.info'
                }
            },
            exec: {
                // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback )
                // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail).
                maxBuffer : 1024*1024
            }
        }
    };

    // gulp source doesn't matter, all files are referenced in options object above
    return gulp.src('thisFileDoesNotExist.js', { read: false })
        .pipe(sonar(options))
        .on('error', util.log);
});



// Tests

/*gulp.task('test', function() {
    return gulp.src('test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));

});*/

gulp.task('pre-test', function () {
    return gulp.src(['lib/**/*.js'])
    // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
    return gulp.src(['test/*.js'])
        .pipe(mocha())
        // Creating the reports after tests ran
        .pipe(istanbul.writeReports())
        // Enforce a coverage of at least 90%
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('default', sequence(['codacy','coveralls','test']));

