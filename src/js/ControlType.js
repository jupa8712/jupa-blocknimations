import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';

import { ListAnimationType } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';
import { mouse, lightning } from './icons';

const SCROLL_DRIVEN = 'animate__scrollDriven';
const ON_ENTER = 'none-default';

export const ControlType = ( { attributes: { className }, setAttributes } ) => {
	const currentType = getCurrentFromClassName( className, ListAnimationType ) || ON_ENTER;
	const isScrollDriven = currentType === SCROLL_DRIVEN;

	const onToggle = () => {
		const nextType = isScrollDriven ? ON_ENTER : SCROLL_DRIVEN;
		setAttributes( {
			className: updateCurrentClass( className, nextType, currentType ),
		} );
	};

	return (
		<ToolbarButton
			icon={ isScrollDriven ? mouse : lightning }
			label={
				isScrollDriven
					? __( 'Click to change to On Enter', 'jupa-blocknimations' )
					: __( 'Click to change to Scroll driven', 'jupa-blocknimations' )
			}
			isPressed={ isScrollDriven }
			onClick={ onToggle }
		/>
	);
};
