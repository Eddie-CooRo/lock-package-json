/**
 * Node Module (Library) Boilerplate
 * =====================
 *
 * Create your node module (library) with this user friendly boilerplate. Use this respository as template for your new node library/module
 *
 * @contributors: Eddie Cooro [@Eddie-Cooro]
 *
 * @license: MIT License
 *
 */

/**
 * ModuleInterface
 * =====================
 *
 */
export interface ModuleInterface {
	/**
	 * Input text
	 * =====================
	 * Set text
	 *
	 * @interface [ModuleInterface](https://github.com/Eddie-CooRo/lock-package-json/blob/main/app/types/module.interfaces.ts)
	 *
	 * @param { String } text - input text
	 *
	 */
	text: string;
}

/**
 * ModuleResponseInterface
 * =====================
 *
 */
export interface ModuleResponseInterface {
	/**
	 * Output text
	 * =====================
	 * Get text
	 *
	 * @interface [ModuleResponseInterface](https://github.com/Eddie-CooRo/lock-package-json/blob/main/app/types/module.interfaces.ts)
	 *
	 * @return {fn} string - run app() for output text
	 *
	 */
	app(): string;
}
