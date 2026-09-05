import { __ } from '@wordpress/i18n';
import { MenuGroup, MenuItem, ToolbarDropdownMenu } from '@wordpress/components';
import { video } from '@wordpress/icons';

import { ListAnimate, ListAnimateImages, animationsRevealAllowed, flatAnimateAll } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';
import { DropdownButtons } from './DropdownButtons';

export const ControlAnimate = ( { attributes: { className }, setAttributes, nameBlock, onOpenAdvance } ) => {
	const getCurrentAnimationList = ( name ) => {
		if ( animationsRevealAllowed.includes( name ) ) {
			return [ ...ListAnimate, ...ListAnimateImages ];
		}
		return [ ...ListAnimate ];
	};

	const animationList = getCurrentAnimationList( nameBlock );

	// Detected against the full catalog, not just the curated list rendered
	// below, so an "exotic" animation picked from the Advance modal is still
	// correctly replaced (not left behind) when switching from the toolbar.
	const currentAnimation = getCurrentFromClassName( className, flatAnimateAll );

	const handleClassNameChange = ( selectedAnimation, onClose ) => {
		onClose();
		return setAttributes( {
			className: updateCurrentClass(
				className,
				currentAnimation === selectedAnimation.value ? '' : selectedAnimation.value,
				currentAnimation
			),
		} );
	};

	return (
		<ToolbarDropdownMenu
			icon={ video }
			label={ __( 'Select animation', 'jupa-blocknimations' ) }
		>
			{ ( { onClose } ) => (
				<>
					<MenuGroup>
						<DropdownButtons
							ListItem={ animationList }
							currentValue={ currentAnimation }
							onHandleClick={ handleClassNameChange }
							onClose={ onClose }
						/>
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							onClick={ () => {
								onClose();
								onOpenAdvance();
							} }
						>
							{ __( 'More Animations…', 'jupa-blocknimations' ) }
						</MenuItem>
					</MenuGroup>
				</>
			) }
		</ToolbarDropdownMenu>
	);
};
