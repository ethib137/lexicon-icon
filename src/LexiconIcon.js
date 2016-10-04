import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './LexiconIcon.soy';

/**
 * Implementation of the Lexicon Icon Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/icons-lexicon/|Lexicon Definition}
 */
class LexiconIcon extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconIcon.STATE = {
	/**
	 * Path to the spritemap file with the icons
	 * @default undefined
	 * @instance
	 * @memberof LexiconIcon
	 * @type {string}
	 */
	spritemap: {
		validator: core.isString
	},

	/**
	 * Id of the icon to show from the list of available icons
	 * @default undefined
	 * @instance
	 * @memberof LexiconIcon
	 * @type {string}
	 */
	symbol: {
		validator: core.isString
	}
};

// Register component
Soy.register(LexiconIcon, templates);

export default LexiconIcon;