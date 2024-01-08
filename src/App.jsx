import { useState } from 'react';
import { USERS } from './constants/users';
import {StyledBox, StyledBoxImage, StyledBoxName, StyledBoxUsername, StyledBoxEmail } from './styles'; 


const App = () => {
	const [currentUser, setCurrentUser] = useState(0);

	const handleNext = (currentUser, setCurrentUser) => {
		setCurrentUser(currentUser + 1);
	};
	
	const handlePrevius = (currentUser, setCurrentUser) => {
		setCurrentUser(currentUser - 1);
	};
	
	return (
		<>
			<StyledBox>
				<StyledBoxImage src={USERS[currentUser].profileImage} alt="foto" />
				<StyledBoxName>{USERS[currentUser].name}</StyledBoxName>
				<StyledBoxUsername>{USERS[currentUser].username}</StyledBoxUsername>
				<StyledBoxEmail>{USERS[currentUser].email}</StyledBoxEmail>
			</StyledBox>
			<button onClick={() => handlePrevius(currentUser, setCurrentUser)}>Previous</button>
			<button onClick={() => handleNext(currentUser, setCurrentUser)}>Next</button>  
		</>
	);
};
		
	


export default App;