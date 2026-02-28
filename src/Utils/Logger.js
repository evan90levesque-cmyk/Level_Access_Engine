/**
 * Access Engine Logger
 */
class Logger {
	/**
	 * @singleton
	 * @param {boolean} logging
	 * @returns {Logger}
	 */
	constructor(logging) {
		if (!Logger.instance) {
			if (logging === undefined) {
				logging = false;
			}
			
			this._logging = logging;
			
			Logger.instance = this;
		}
		
		return Logger.instance;
	}
	
	/**
	 * @returns {boolean}
	 */
	get logging() {
		return this._logging;
	}
	
	/**
	 * @param {boolean} logging
	 */
	set logging(logging) {
		this._logging = logging;
	}
	
	/**
	 * Wrapper for console.log so we can turn on logging only when needed
	 */
	log() {
		if (this._logging) {
			console.log.apply(window, arguments);
		}
	}

	/**
	 * Wrapper for indicating there was a runtime error
	 */
	error() {
		if (this._logging) {
			if (console.error) {
				console.error.apply(window, arguments);
			} else {
				console.log.apply(window, arguments);
			}
		}
	}
}

/**
 * @const
 * @type {AEKernel}
 */
const logger = new Logger();
export {logger};