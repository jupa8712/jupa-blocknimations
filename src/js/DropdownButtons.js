import { MenuItem } from '@wordpress/components';

export const DropdownButtons = ( { onHandleClick, currentValue, ListItem, onClose } ) => {
	return (
		<>
			{ ListItem.map( ( value ) => {
				return (
					<MenuItem
						key={ value.value }
						isPressed={ currentValue === value.value }
						className="jupa-blocknimations__button"
						onClick={ () => onHandleClick( value, onClose ) }
					>
						{ value.title }
					</MenuItem>
				);
			} ) }
		</>
	);
};
