import { __ } from '@wordpress/i18n';
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalVStack as VStack,
	Modal,
	SelectControl,
} from '@wordpress/components';

import { ListAnimationType, ListDelay, ListAnimateAll, flatAnimateAll } from './const';
import { getCurrentFromClassName, updateCurrentClass } from './utils';

export const ControlAdvance = ({ attributes: { className }, setAttributes, isOpen, onClose }) => {
	const currentType = getCurrentFromClassName(className, ListAnimationType) || 'none-default';
	const currentAnimation = getCurrentFromClassName(className, flatAnimateAll) || 'none-default';
	const currentDelay = getCurrentFromClassName(className, ListDelay) || 'none-default';
	const isScrollDriven = currentType === 'animate__scrollDriven';

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

	const onChangeDelay = (delay) => {
		setAttributes({
			className: updateCurrentClass(className, delay, currentDelay),
		});
	};

	if (!isOpen) {
		return null;
	}

	return (
		<Modal title={__('Advance', 'jupa-blocknimations')} onRequestClose={onClose}>
			<VStack spacing={4}>
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

				{!isScrollDriven && (
					<SelectControl
						label={__('Delay', 'jupa-blocknimations')}
						value={currentDelay}
						onChange={onChangeDelay}
					>
						{ListDelay.map((option) => (
							<option key={option.value} value={option.value}>
								{option.title}
							</option>
						))}
					</SelectControl>
				)}
			</VStack>
		</Modal>
	);
};
