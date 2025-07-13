import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
}

export function formatRuntime(runtime: number): string {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;
	return `${hours}ч ${minutes}мин`;
}
