// Karma configuration for maven test phase
const isDocker = require('is-docker')();

module.exports = function(config) {
	const configObject = {
		client: {
			jasmine: {
				random: false,
				timeoutInterval: 36000000
			},
			useIframe: false,
			runInParent: true,
			browserNoActivityTimeout: 36000000,
		},

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../../../UnitTests',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'beforeEach.js',
			{pattern: 'resources/*.*', included: false, served: true, nocache: false},
			'../versions/community/target/Unminified/AccessEngine.community.js',
			'unit_tests_iframeBased_markdown/*.js',
			'unit_tests_iframeBased_fingerprints/*.js',
			'unit_tests_iframeBased_Automatic/*.js',
			'unit_tests_iframeBased_AccNameCalcFunction/*.js',
			'unit_tests_iframeBased_APIs/unit-test_runAllTests_returnInstances_JSON.js',
			'unit_tests_iframeBased_APIs/unit-test_runAllTests_returnInstances_JSON.community.js',
			'unit_tests_iframeBased_APIs/unit-test_test_stages.js',
			'unit_tests_iframeBased_analyticAPIs/*.js',
			'unit_tests_iframeBased_fixes/*.js',
			'unit_tests_iframeBased_ShadowDOM/*.js',
			'unit_tests_mainpageBased_Automatic/*.js'
		],

		proxies: {
			'/resources/': '/base/resources/'
		},

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_ERROR
	};

	configObject.customLaunchers = {
		ChromeCustom: {
			base: 'ChromeHeadless',
			// We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
			// more permissions than Docker allows by default). Note that even though the Docker configuration
			// in the POMs has been removed, this is still required since our CI/CD environment runs in Docker
			// and we need to detect this.
			flags: isDocker ? ['--no-sandbox'] : [],
			timeoutInMillis: 36000000
		},
		FirefoxCustom: {
			base: 'Firefox',
			flags: ['--headless'],
			prefs: {
				'toolkit.telemetry.reportingpolicy.firstRun': false,
				'extensions.enabledScopes': 0,
				'extensions.autoDisableScopes': 15,
				'extensions.installDistroAddons': false,
			}
		}
	};
	configObject.reporters = ['junit'];
	configObject.singleRun = isDocker;
	configObject.autoWatch = true;
	configObject.concurrency = Infinity;
	configObject.browserNoActivityTimeout = 36000000;
	configObject.browserDisconnectTolerance = 2;

	configObject.junitReporter = {
		outputDir: '../versions/community/target/karma-reports'
	};

	configObject.browsers = Object.keys(configObject.customLaunchers);

	config.set(configObject);
};
