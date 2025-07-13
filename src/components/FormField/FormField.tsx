import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Icon } from '../Icon/Icon';

import styles from './styles.module.css';
import type { IInputs, IconTypes } from '@/types';
import { cn } from '@/utils';

interface Props {
	type: string;
	iconName: IconTypes;
	name: keyof IInputs;
	required: boolean;
	placeholder: string;
	register: UseFormRegister<IInputs>;
	errors: FieldErrors<IInputs>;
}

export const FormField = ({
	type,
	iconName,
	name,
	required,
	placeholder,
	register,
	errors,
}: Props) => {
	return (
		<label
			className={cn(
				'flex gap-x-3 p-4 rounded-lg border border-[rgba(0,0,0,.4)] w-full transition-colors',
				styles.label,
				{ ['border-[#FF7575]']: !!errors[name]?.message }
			)}>
			<Icon
				name={iconName}
				className={cn('fill-[rgba(0,0,0,.4)] transition-colors', styles.icon, {
					['fill-[#FF7575]']: !!errors[name]?.message,
				})}
			/>
			<input
				{...register(name, { required })}
				type={type}
				placeholder={placeholder}
				className='outline-0 w-full text-lg leading-6 text-black placeholder:text-[rgba(0,0,0,.4)] placeholder:text-lg placeholder:leading-6 bg-transparent'
			/>
		</label>
	);
};
