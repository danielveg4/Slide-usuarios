import {StyledBox, StyledBoxImage, StyledBoxName, StyledBoxUsername, StyledBoxEmail } from './styles'; 
import Buttonprevius from '../buttonprevius/Buttonprevius';
import Buttonnext from '../buttonnext/Buttonnext';

const Box = ({ name, username, email, profileImage, action }) => {
	return (
		<>
			<StyledBox>
                <StyledBoxImage src={profileImage} alt="foto" />
                <StyledBoxName>{name}</StyledBoxName>
                <StyledBoxUsername>{username}</StyledBoxUsername>
                <StyledBoxEmail>{email}</StyledBoxEmail>
            </StyledBox>
			<Buttonprevius onClick={action} />
            <Buttonnext onClick={action} />
        </>
  );
};

export default Box;