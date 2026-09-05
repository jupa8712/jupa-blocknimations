import { __ } from '@wordpress/i18n';
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalVStack as VStack,
	Button,
	Modal,
	SelectControl,
	ToolbarButton,
} from '@wordpress/components';
import { settings } from '@wordpress/icons';

import { ListAnimationType, ListAnimateAll, flatAnimateAll } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';

export const ControlAdvance = ({ attributes: { className }, setAttributes, isOpen, onOpen, onClose }) => {
	const currentType = getCurrentFromClassName(className, ListAnimationType) || 'none-default';
	const currentAnimation = getCurrentFromClassName(className, flatAnimateAll) || 'none-default';

	const onChangeType = (type) => {
		setAttributes({
			className: updateCurrentClass(className, type, currentType),
		});
	};

	const onChangeAnimation = (animation) => {
		setAttributes({
			className: updateCurrentClass(className, animation, currentAnimation),
		});
	};

	return (
		<>
			<ToolbarButton
				icon={settings}
				label={__('Advance', 'jupa-blocknimations')}
				onClick={onOpen}
			/>
			{isOpen && (
				<Modal title={__('Advance', 'jupa-blocknimations')} onRequestClose={onClose}>
					<VStack spacing={4}>
						<SelectControl
							label={__('Animation', 'jupa-blocknimations')}
							value={currentAnimation}
							onChange={onChangeAnimation}
						>
							<option value="none-default">{__('None', 'jupa-blocknimations')}</option>
							{ListAnimateAll.map((group) => (
								<optgroup key={group.label} label={group.label}>
									{group.options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.title}
										</option>
									))}
								</optgroup>
							))}
						</SelectControl>

						<ToggleGroupControl
							label={__('Type', 'jupa-blocknimations')}
							value={currentType}
							onChange={onChangeType}
							isBlock
						>
							{ListAnimationType.map(({ title, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={title} />
							))}
						</ToggleGroupControl>
						{/* <div>
							<Button variant="primary" onClick={onClose}>
								{__('Close', 'jupa-blocknimations')}
							</Button>
						</div> */}
					</VStack>
				</Modal>
			)}
		</>
	);
};
