import Task from './Task'

const tasks = [
	{
		id: '1',
		title: 'Test',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi repudiandae laudantium quisquam deleniti ex optio amet eveniet vitae nam nulla nostrum praesentium quis, minus nemo explicabo, commodi dolorum tenetur!',
		status: 'TODO',
	},
	{
		id: '2',
		title: 'Test2',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi repudiandae laudantium quisquam deleniti ex optio amet eveniet vitae nam nulla nostrum praesentium quis, minus nemo explicabo, commodi dolorum tenetur!',
		status: 'DONE',
	},
	{
		id: '3',
		title: 'Test3',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi repudiandae laudantium quisquam deleniti ex optio amet eveniet vitae nam nulla nostrum praesentium quis, minus nemo explicabo, commodi dolorum tenetur!',
		status: 'IN_PROGRESS',
	},
]
const Column = ({ title, status }: { title: string; status: string }) => {
	const filterTask = tasks.filter(task => task.status === status)

	return (
		<section className=' w-[30%] h-[80%] '>
			<h1 className='text-gray-100 text-2xl font-semibold p-2'>
				{title}
			</h1>
			<div className='h-full bg-gray-700/60 flex flex-col justify-start gap-2 rounded-xl p-2'>
				{filterTask.map(task => (
					<Task key={task.id} {...task} />
				))}
			</div>
		</section>
	)
}

export default Column
