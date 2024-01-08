import { useState } from 'react';
import { USERS } from './constants/users';
import Box from './components/box/Box';

const App = () => {
	const [currentUser, setCurrentUser] = useState(0);

	return (
	  <>
		<Box />
	  </>
	);
};

const handleNext = () => {
    setCurrentUser((previusUser) => (previusUser + 1));
  };

const handlePrevius = () => {
    setCurrentUser((previusUser) => (previusUser - 1));
  };
  
export default App;
