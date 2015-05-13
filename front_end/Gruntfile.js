module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
				stripBanners: true
			},
			app: {
				src: [
					'app/app.js',
					'app/directives/directives.js',
					'app/modules/rootController.js',
					'app/modules/**/*.js'
				],
				dest: 'app/dist/app.js'
			},
		},
	
		uglify: {
			options: {
				mangle: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					// 'app/dist/vendors.min.js': ['<%= concat.dist.dest %>'],
					// 'app/dist/angular.min.js': ['<%= concat.angular.dest %>'],
					// 'app/dist/angular-modules.min.js': ['<%= concat.angularLibs.dest %>'],
					'app/dist/app.min.js': ['<%= concat.app.dest %>'],
				}
			},
		},

		jshint: {
			files: ['Gruntfile.js'],
			options: {
				// options here to override JSHint defaults
				eqeqeq: true,
				indent: 4,
				latedef: true,
				unused: true,
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		connect: {
			server: {
				options: {
					base: 'app/',
					port: 9009,
					open: true
				}
			},
		},
		watch: {
			options: {
				livereload: true
			},
			app: {
				files: ['<%= jshint.files %>', 'app/**/*.*', '!**/app/dist/**'],
				tasks: ['build'],
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('build', ['jshint', 'concat:app', 'uglify:dist']);

	grunt.registerTask('serve', ['connect:server', 'watch:app']);

};
