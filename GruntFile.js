module.exports = function (grunt) {
	require('google-closure-compiler').grunt(grunt);
	
	grunt.initConfig({
		paths: {
			professional: 'versions/professional/target',
			community: 'versions/community/target'
		},
		
		'closure-compiler': {
			options: {
				compilation_level: 'SIMPLE',
				language_in      : 'ECMASCRIPT_2015',
				language_out     : 'ECMASCRIPT_2015',
				debug            : true
			},
			professional: {
				files: {
					'<%= paths.professional %>/AccessEngine.professional.js': ['<%= paths.professional %>/Unminified/AccessEngine.professional.js']
				}
			},
			community: {
				files: {
					'<%= paths.community %>/AccessEngine.community.js': ['<%= paths.community %>/Unminified/AccessEngine.community.js']
				}
			}
		},
		
		banner: '/**\n' +
		        ' * @license\n' +
		        ' * Copyright (C) Level Access 2015-<%= grunt.template.today("yyyy") %> - All Rights Reserved\n' +
		        ' * Unauthorized copying of this file, via any medium is strictly prohibited\n' +
		        ' * Proprietary and confidential\n' +
		        ' * By using this code you automatically agree to Section 2 Service Terms, Section 5.2 License and Use Restrictions; and Section 6 Representations, Warranties, Remedies and Disclaimers of Level Access’ Master Subscription Agreement (http://www.levelaccess.com/msa/)\n' +
		        ' */\n',
		
		usebanner: {
			options  : {
				position : 'top',
				banner   : '<%= banner %>',
				linebreak: true
			},
			professional: {
				files: {
					src: ['<%= paths.professional %>/Unminified/AccessEngine.professional.js', '<%= paths.professional %>/AccessEngine.professional.js']
				}
			},
			community: {
				files: {
					src: ['<%= paths.community %>/Unminified/AccessEngine.community.js', '<%= paths.community %>/AccessEngine.community.js']
				}
			}
		},
		
		pkg: grunt.file.readJSON("package.json"),
		
		replace: {
			professional: {
				src: ['./<%= paths.professional %>/*.js'],
				overwrite: true,
				replacements: [{
					from: 'antProjectVersion',
					to: '<%= pkg.version %>'
				}]
			},
			community: {
				src: ['./<%= paths.community %>/*.js'],
				overwrite: true,
				replacements: [{
					from: 'antProjectVersion',
					to: '<%= pkg.version %>'
				}]
			}
		},
		
		clean: {
			professional: '<%= paths.professional %>/Unminified/*.rollup',
			community: '<%= paths.community %>/Unminified/*.rollup',
		}
	});
	
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('google-closure-compiler');
	grunt.loadNpmTasks('grunt-text-replace');
	
	grunt.registerTask('default', ['closure-compiler', 'usebanner', 'replace', 'clean']);
	grunt.registerTask('professional', ['closure-compiler:professional', 'usebanner:professional', 'replace:professional', 'clean:professional']);
	grunt.registerTask('community', ['closure-compiler:community', 'usebanner:community', 'replace:community', 'clean:community']);
};