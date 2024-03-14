import Columns from '@/components/Columns'
import Image from 'next/image'

export default function Home() {
	return (
		<article className='flex justify-center items-center h-screen gap-4 bg-gray-800'>
			<Columns />
		</article>
	)
}
