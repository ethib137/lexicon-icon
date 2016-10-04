'use strict';

import LexiconIcon from '../src/LexiconIcon';

let icon;

describe('LexiconIcon', function() {
	afterEach(() => {
		if (icon) {
			icon.dispose();
		}
	});

	it('should generate the default spritemap#symbol markup defined by Lexicon', function() {
		icon = new LexiconIcon(
			{
				spritemap: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testDefaultLexiconIcon.html']);
	});

	it('should append elementClasses to the outer element', function() {
		icon = new LexiconIcon(
			{
				elementClasses: 'css-class',
				spritemap: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testElementClassesLexiconIcon.html']);
	});
});
