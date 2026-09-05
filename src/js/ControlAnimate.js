import { __ } from '@wordpress/i18n';
import { MenuGroup, MenuItem, ToolbarDropdownMenu } from '@wordpress/components';
import { video } from '@wordpress/icons';

import { ListAnimate, ListAnimateImages, flatAnimateAll } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';
import { DropdownButtons } from './DropdownButtons';

const animationList = [ ...ListAnimate, ...ListAnimateImages ];

export const ControlAnimate = ( { attributes: { className }, setAttributes, onOpenAdvance } ) => {
	// Detected against the full catalog (which also includes the Reveal
	// group), so an "exotic" animation picked from the Advance modal is
	// still correctly replaced when switching from the toolbar.
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
			toggleProps={ { isPressed: !! currentAnimation } }
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
