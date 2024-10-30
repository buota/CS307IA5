// module.test.js
import mut from './module.js'; //MUT = Module Under Test

test('Testing sum -- success', () => {
	const expected = 30;
	const got = mut.sum(12,18);
	expect(got).toBe(expected);
});

test('Testing div -- success', () => {
	const expected = 2;
	const got = mut.div(8, 4);
	expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
	const got = mut.containsNumbers("Hi spec27");
	expect(got).toBe(true);
});

