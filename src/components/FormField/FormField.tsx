import { type InputHTMLAttributes, forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';

import { Icon } from '@/components';
import type { IconTypes } from '@/types';
import { cn } from '@/utils';

import styles from './styles.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	iconName: IconTypes;
	error?: FieldError;
}

export const FormField = forwardRef<HTMLInputElement, Props>(
	({ iconName, error, placeholder, className, ...props }, ref) => {
		return (
			<label
				className={cn(
					'flex gap-x-3 p-4 rounded-lg border border-[rgba(0,0,0,.4)] w-full transition-colors',
					styles.label,
					className,
					{ ['border-[#FF7575]']: error }
				)}>
				<Icon
					name={iconName}
					className={cn(
						'fill-[rgba(0,0,0,.4)] transition-colors',
						styles.icon,
						{
							['fill-[#FF7575]']: error,
						}
					)}
				/>
				<input
					ref={ref}
					{...props}
					placeholder={placeholder}
					className='outline-0 w-full text-lg leading-6 text-black placeholder:text-[rgba(0,0,0,.4)] placeholder:text-lg placeholder:leading-6 bg-transparent'
				/>
			</label>
		);
	}
);
