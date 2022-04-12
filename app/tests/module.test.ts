/**
 * Jest Tests
 * =====================
 *
 * @contributors: Eddie Cooro [@Eddie-Cooro]
 *
 * @license: MIT License
 *
 */
import m from "@app/functions/module";

test("show hello world", async () => {
	const { app } = await m({ text: "hello-world" });
	expect(app()).toBe("hello-world");
});
