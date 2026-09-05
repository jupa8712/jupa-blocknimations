import './style.scss';

import { useState } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';

import { ControlAnimate } from './js/ControlAnimate';
import { ControlDelay } from './js/ControlDelay';
import { ControlType } from './js/ControlType';
import { ControlAdvance } from './js/ControlAdvance';
import { allowedBlocks, ListAnimationType } from './js/const';
import { getCurrentFromClassName } from './js/utils';

const withAnimate = ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, setAttributes, name } = props;
		const [ isAdvanceOpen, setIsAdvanceOpen ] = useState( false );

		if ( ! allowedBlocks.includes( name ) ) {
			return <BlockEdit { ...props } />;
		}

		// Delay is time-based; it has no meaningful effect once the
		// animation is driven by scroll position instead of a duration.
		const isScrollDriven =
			getCurrentFromClassName( attributes.className, ListAnimationType ) === 'animate__scrollDriven';

		return (
			<>
				<BlockEdit { ...props } />
				<BlockControls>
					<ToolbarGroup>
						<ControlAnimate
							attributes={ attributes }
							setAttributes={ setAttributes }
							onOpenAdvance={ () => setIsAdvanceOpen( true ) }
						/>
						{ ! isScrollDriven && (
							<ControlDelay attributes={ attributes } setAttributes={ setAttributes } />
						) }
						<ControlType attributes={ attributes } setAttributes={ setAttributes } />
					</ToolbarGroup>
				</BlockControls>
				<ControlAdvance
					attributes={ attributes }
					setAttributes={ setAttributes }
					isOpen={ isAdvanceOpen }
					onClose={ () => setIsAdvanceOpen( false ) }
				/>
			</>
		);
	};
};

addFilter( 'editor.BlockEdit', 'jupa-blocknimations/animate-controls', withAnimate );
