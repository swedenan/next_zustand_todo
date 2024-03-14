import React from 'react'
import Column from './Column'

const Columns = () => {
	return (
		<>
			<Column title='TODO' status='TODO' />
			<Column title='In Progress' status='IN_PROGRESS' />
			<Column title='Done' status='DONE' />
		</>
	)
}

export default Columns
