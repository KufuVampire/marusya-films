import { type HTMLProps, forwardRef, useState } from 'react';

import { Icon, LiveSearchMovies } from '@/components';
import { useDebounce, useMovies } from '@/hooks';
import { cn } from '@/utils';

interface Props extends HTMLProps<HTMLDivElement> {
	className?: string;
	listClassName?: string;
}

export const MovieSearch = forwardRef<HTMLDivElement, Props>(
	({ className, listClassName }, ref) => {
		const [value, setValue] = useState('');

		const debounceValue = useDebounce(value, 1000);

		const { data, isSuccess } = useMovies({ title: debounceValue.trim() });

		return (
			<div
				ref={ref}
				className={cn(
					'flex item-center gap-x-3 bg-[#393B3C] w-full rounded-lg py-3 px-4 relative',
					className
				)}>
				<Icon
					name='search'
					className='opacity-50'
				/>
				<input
					type='text'
					className='bg-transparent outline-none border-0 text-[18px] leading-6 text-[#fff] placeholder:text-[rgba(255, 255, 255, .5)] w-full'
					placeholder='Поиск'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<Icon
					name='cross'
					className='fill-white cursor-pointer hover:fill-[rgba(255,255,255,.5)] transition-colors'
					onClick={() => setValue('')}
				/>
				{value.length > 2 && debounceValue.length > 2 && isSuccess && (
					<LiveSearchMovies
						className={listClassName}
						data={data}
						setValue={setValue}
					/>
				)}
			</div>
		);
	}
);
