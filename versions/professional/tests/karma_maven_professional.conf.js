// Karma configuration for maven test phase
const isDocker = require('is-docker')();

module.exports = function(config) {
	const useSauceLabs = config.sauceLabs || false;

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
			'../versions/professional/target/Unminified/AccessEngine.professional.js',
			'unit_tests_iframeBased_markdown/*.js',
			'unit_tests_iframeBased_markdown_full/*.js',
			'unit_tests_iframeBased_minimum/*.js',
			'unit_tests_iframeBased_fingerprints/*.js',
			'unit_tests_iframeBased_Automatic/*.js',
			'unit_tests_iframeBased_GuidedAutomatic/*.js',
			'unit_tests_iframeBased_AdvisoryAutomatic/*.js',
			'unit_tests_iframeBased_AccNameCalcFunction/*.js',
			'unit_tests_iframeBased_APIs/unit-test_runAllTests_returnInstances_JSON.js',
			'unit_tests_iframeBased_APIs/unit-test_runAllTests_returnInstances_JSON.professional.js',
			'unit_tests_iframeBased_APIs/unit-test_runAllTests_returnInstances_JSON_NodeCapture.js',
			'unit_tests_iframeBased_APIs/unit-test_test_stages.js',
			'unit_tests_iframeBased_toolbarAPIs/*.js',
			'unit_tests_iframeBased_analyticAPIs/*.js',
			'unit_tests_iframeBased_fixes/*.js',
			'unit_tests_iframeBased_ampAPIs/*.js',
			'unit_tests_iframeBased_ShadowDOM/*.js',
			'unit_tests_iframeBased_mobile/*.js',
			'unit_tests_iframeBased_nextgenAPIs/*.js',
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

	if (useSauceLabs) {
		configObject.customLaunchers = {
			// Windows 10
			sauceLabs_win10_chrome: {
				base: 'SauceLabs',
				platform: 'Windows 10',
				browserName: 'chrome',
				version: 'latest'
			},
			sauceLabs_win10_firefox: {
				base: 'SauceLabs',
				platform: 'Windows 10',
				browserName: 'firefox',
				version: 'latest'
			},
			sauceLabs_win10_edge: {
				base: 'SauceLabs',
				platform: 'Windows 10',
				browserName: 'MicrosoftEdge',
				version: 'latest'
			},
			
			// Windows 11
			sauceLabs_win11_chrome: {
				base: 'SauceLabs',
				platform: 'Windows 11',
				browserName: 'chrome',
				version: 'latest'
			},
			sauceLabs_win11_firefox: {
				base: 'SauceLabs',
				platform: 'Windows 11',
				browserName: 'firefox',
				version: 'latest'
			},
			sauceLabs_win11_edge: {
				base: 'SauceLabs',
				platform: 'Windows 11',
				browserName: 'MicrosoftEdge',
				version: 'latest'
			},

			// macOS
			sauceLabs_macOS_chrome: {
				base: 'SauceLabs',
				platform: 'macOS 13',
				browserName: 'chrome',
				version: 'latest'
			},
			sauceLabs_macOS_firefox: {
				base: 'SauceLabs',
				platform: 'macOS 13',
				browserName: 'firefox',
				version: 'latest'
			},
			sauceLabs_macOS_safari: {
				base: 'SauceLabs',
				platform: 'macOS 13',
				browserName: 'safari',
				version: 'latest'
			},

			// iOS - karma-sauce-launcher is incompatible with Appium 2 and thus unable to run latest iOS version
			// See: https://github.com/karma-runner/karma-sauce-launcher/issues/284
			sauceLabs_iOS_safari: {
				base: 'SauceLabs',
				deviceName: 'iPhone Simulator',
				deviceOrientation: 'portrait',
				platformName: 'iOS',
				platformVersion: '15.5',
				browserName: 'Safari'
			},

			// Android - karma-sauce-launcher is incompatible with Appium 2 and thus unable to run latest Android version
			// See: https://github.com/karma-runner/karma-sauce-launcher/issues/284
			sauceLabs_android_chrome: {
				base: 'SauceLabs',
				deviceName: 'Android GoogleAPI Emulator',
				deviceOrientation: 'portrait',
				platformName: 'Android',
				platformVersion: '12.0',
				browserName: 'Chrome'
			}
		};
		configObject.reporters = ['progress', 'saucelabs'];
		configObject.singleRun = true;
		configObject.autoWatch = false;
		configObject.concurrency = 2;  // our current Sauce Labs account only allows us to have 2 active sessions at a time
		configObject.browserNoActivityTimeout = 400000;
		configObject.browserDisconnectTolerance = 0;

		configObject.sauceLabs = {
			testName: 'Access Engine Unit Tests',
			idleTimeout: 180,
			connectOptions: {
				tunnelDomains: '0.0.0.0'
			}
		};
		configObject.captureTimeout = 180000;
		configObject.browserSocketTimeout = 180000;
		configObject.browserDisconnectTimeout = 180000;
		configObject.processKillTimeout = 180000;
		configObject.retryLimit = 0;
		configObject.hostname = '0.0.0.0';
	} else {
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
				},
				timeoutInMillis: 36000000
			}
		};
		configObject.reporters = ['junit'];
		configObject.singleRun = isDocker;
		configObject.autoWatch = true;
		configObject.concurrency = Infinity;
		configObject.browserNoActivityTimeout = 36000000;
		configObject.browserDisconnectTolerance = 2;

		configObject.junitReporter = {
			outputDir: '../versions/professional/target/karma-reports'
		};
	}

	configObject.browsers = Object.keys(configObject.customLaunchers);

	config.set(configObject);
};
