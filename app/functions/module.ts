/**
 * Node Module
 * =====================
 *
 * Show hello world text
 *
 * @contributors: Eddie Cooro [@Eddie-Cooro]
 *
 * @license: MIT License
 *
 */
import type { ModuleInterface, ModuleResponseInterface } from "@app/types/module.interfaces";

/**
 * Hello World
 * =====================
 *
 * Print hello-world, run with: npx undefined/lock-package-json
 *
 * @interface [ModuleInterface ModuleResponseInterface](https://github.com/Eddie-CooRo/lock-package-json/blob/main/app/types/module.interfaces.ts)
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that return string
 *
 */
const m = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app,
	};
};

export default m;
