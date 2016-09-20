'use strict';

import LexiconIcon from '../src/LexiconIcon';

let icon;

describe('LexiconIcon', function() {
	afterEach(() => {
		if (icon) {
			icon.dispose();
		}
	});

	it('should generate the default sprite#symbol markup defined by Lexicon', function() {
		icon = new LexiconIcon(
			{
				sprite: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testDefaultLexiconIcon.html']);
	});

	it('should append a cssClass to the outer element', function() {
		icon = new LexiconIcon(
			{
				cssClass: 'css-class',
				sprite: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testCssClassLexiconIcon.html']);
	});
});
