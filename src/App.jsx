import { useState } from 'react';
import { USERS } from './constants/users';

const App = () => {
	const [usersPerPage, setUsersPerPage] = useState(2);
	const [currentPage, setCurrentPage] = useState(1);

	const { paginatedUsers, totalPages } = paginateUsers(
		USERS,
		currentPage,
		usersPerPage
	);

	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === totalPages;

	return (
		<>
			<h1>Slice de usuarios</h1>
			{paginatedUsers.map(user => (
				<div key={user.userId}>
					<img src={user.profileImage} alt='foto' />
					<p>{user.name}</p>
				</div>
			))}
			<select
				value={usersPerPage}
				onChange={event =>
					handleSelectChange(setUsersPerPage, event, setCurrentPage)
				}
			>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
			</select>
			<button
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={isFirstPage}
			>
				Previous
			</button>
			<span>
				Página {currentPage} de {totalPages}
			</span>
			<button
				onClick={() => setCurrentPage(currentPage + 1)}
				disabled={isLastPage}
			>
				Next
			</button>
		</>
	);
};

const paginateUsers = (USERS, currentPage, usersPerPage) => {
	const startIndex = (currentPage - 1) * usersPerPage;
	const endIndex = startIndex + usersPerPage;
	const paginatedUsers = USERS.slice(startIndex, endIndex);
	const totalPages = Math.ceil(USERS.length / usersPerPage);
	return { paginatedUsers, totalPages };
};

const handleSelectChange = (setUsersPerPage, event, setCurrentPage) => {
	setUsersPerPage(event.target.value);
	setCurrentPage(1);
};

export default App;
