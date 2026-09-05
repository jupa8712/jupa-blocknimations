import './style.scss';

import { useState } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';

import { ControlAnimate } from './js/ControlAnimate';
import { ControlDelay } from './js/ControlDelay';
import { ControlAdvance } from './js/ControlAdvance';
import { allowedBlocks } from './js/const';

const withAnimate = ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, setAttributes, name } = props;
		const [ isAdvanceOpen, setIsAdvanceOpen ] = useState( false );

		if ( ! allowedBlocks.includes( name ) ) {
			return <BlockEdit { ...props } />;
		}

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
						<ControlDelay attributes={ attributes } setAttributes={ setAttributes } />
						<ControlAdvance
							attributes={ attributes }
							setAttributes={ setAttributes }
							isOpen={ isAdvanceOpen }
							onOpen={ () => setIsAdvanceOpen( true ) }
							onClose={ () => setIsAdvanceOpen( false ) }
						/>
					</ToolbarGroup>
				</BlockControls>
			</>
		);
	};
};

addFilter( 'editor.BlockEdit', 'jupa-blocknimations/animate-controls', withAnimate );
