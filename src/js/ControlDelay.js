import { __ } from '@wordpress/i18n';
import { MenuGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { backup } from '@wordpress/icons';

import { ListDelay } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';
import { DropdownButtons } from './DropdownButtons';

export const ControlDelay = ( { attributes: { className }, setAttributes } ) => {
	const currentDelay = getCurrentFromClassName( className, ListDelay );

	const onHandleClassName = ( delay, onClose ) => {
		onClose();
		return setAttributes( {
			className: updateCurrentClass(
				className,
				currentDelay === delay.value ? '' : delay.value,
				currentDelay
			),
		} );
	};

	return (
		<ToolbarDropdownMenu
			icon={ backup }
			label={ __( 'Select delay', 'jupa-blocknimations' ) }
			toggleProps={ { isPressed: !! currentDelay } }
		>
			{ ( { onClose } ) => (
				<MenuGroup>
					<DropdownButtons
						ListItem={ ListDelay }
						currentValue={ currentDelay }
						onHandleClick={ onHandleClassName }
						onClose={ onClose }
					/>
				</MenuGroup>
			) }
		</ToolbarDropdownMenu>
	);
};
