import TokenList from '@wordpress/token-list';

import { ListDelay, ListAnimationType } from './const';

// Controls whose values toggle independently of the main "animate__animated"
// pair (i.e. they don't represent an animation choice themselves). Adding a
// new secondary control just means listing it here — no string parsing to
// keep in sync.
const secondaryLists = [ ListDelay, ListAnimationType ];

const isSecondaryValue = ( value ) =>
	secondaryLists.some( ( list ) => list.some( ( option ) => option.value === value ) );

export const getCurrentFromClassName = ( className, ListClass ) => {
	const list = new TokenList( className );
	const style = ListClass.find( ( option ) => list.contains( `${ option.value }` ) );
	const response = style !== undefined ? style.value : '';
	return response;
};

export const updateCurrentClass = ( className, newClass = '', oldClass = '' ) => {
	const list = new TokenList( className );

	if ( oldClass ) {
		if ( oldClass === 'none-default' ) {
			// Nothing to remove; 'none-default' is never added to the class list.
		} else if ( isSecondaryValue( oldClass ) ) {
			list.remove( `${ oldClass }` );
		} else {
			list.remove( `animate__animated` );
			list.remove( `${ oldClass }` );
		}
	}

	if ( newClass ) {
		if ( newClass === 'none-default' ) {
			// Nothing to add; selecting "None" only clears the previous class.
		} else if ( isSecondaryValue( newClass ) ) {
			list.add( `${ newClass }` );
		} else {
			list.add( `animate__animated` );
			list.add( `${ newClass }` );
		}
	}
	return list.value;
};
