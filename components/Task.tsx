import { cn } from '@/lib/cn'
import React from 'react'

const Task = ({
	title,
	text,
	status,
}: {
	title: string
	text: string
	status: string
}) => {
	return (
		<div
			className={cn(
				'flex flex-col  bg-gray-100/95 h-fit p-4 w-full rounded-xl cursor-move ',
				{ 'border-sky-600/80 border-4': status === 'TODO' },
				{ 'border-amber-600/80 border-4': status === 'IN_PROGRESS' },
				{ 'border-green-600/80 border-4': status === 'DONE' }
			)}
		>
			<div className='flex justify-between'>
				<h1 className=' text-zinc-900 font-semibold text-xl pb-2'>
					{title}
				</h1>
				<div className='mt-1 cursor-pointer'>
					<svg
						className='text-zinc-600 size-5 hover:text-red-500 transition-colors'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M3 6h18' />
						<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
						<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
						<line x1='10' x2='10' y1='11' y2='17' />
						<line x1='14' x2='14' y1='11' y2='17' />
					</svg>
				</div>
			</div>
			<p className='text-zinc-800 text-base'>{text}</p>
		</div>
	)
}

export default Task
