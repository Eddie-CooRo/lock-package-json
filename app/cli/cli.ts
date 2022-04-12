#! /usr/bin/env node
/**
 * CLI
 * =====================
 * Command Line Interface
 *
 * @contributors: Eddie Cooro [@Eddie-Cooro]
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import path from "path/posix";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
	.usage(`Usage: $0 --dir ./libs/tools`)
	.option("dir", {
		type: "string",
		describe: "Directory in which the package and package-lock.json will be found",
	})
	.example(
		"$0 ./package.json ./package-lock.json",
		"Locks the package.json file based on versions declared inside of the package-lock.json",
	)
	.example(
		"$0 --dir ./libs/tools",
		"Locks the package.json file inside of the tools directory using the package-lock.json file in the same place",
	)
	.example(
		"$0",
		"Locks the package.json file inside of the current directory directory using the package-lock.json file in the same place",
	)
	.help("help")
	.alias("help", "h").argv;

const dir = argv.dir || "./";
const [packagejsonPath = path.join(dir, "package.json"), packageLockPath = path.join(dir, "package-lock.json")] =
	argv._;

const packagejsonstr = fs.readFileSync(packagejsonPath, "utf8");
const packagelockstr = fs.readFileSync(packageLockPath, "utf8");
const packagejson = JSON.parse(packagejsonstr);
const packagelock = JSON.parse(packagelockstr);

const lockDependencies = packagelock.dependencies;

const getLockedDependenciesFor = (dependencies: any) => {
	return Object.fromEntries(
		Object.keys(dependencies).map((d) => {
			if (lockDependencies[d]) {
				return [d, `${lockDependencies[d].version}`];
			} else {
				throw new Error(`No lock dependency found for ${d}`);
			}
		}),
	);
};

const lockedPackage = {
	...packagejson,
	...(packagejson.dependencies ? { dependencies: getLockedDependenciesFor(packagejson.dependencies) } : {}),
	...(packagejson.devDependencies ? { devDependencies: getLockedDependenciesFor(packagejson.devDependencies) } : {}),
	...(packagejson.peerDependencies
		? { peerDependencies: getLockedDependenciesFor(packagejson.peerDependencies) }
		: {}),
};

fs.writeFileSync(packagejsonPath, JSON.stringify(lockedPackage, null, 2), "utf8");
