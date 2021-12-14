import { CircleContainer } from './styled';

interface UserInfo {
    initials: string;
}

const UserCircle = ({ initials }: UserInfo) => {
    return (
        <CircleContainer>
            {initials}
        </CircleContainer>
    );
}

export default UserCircle;