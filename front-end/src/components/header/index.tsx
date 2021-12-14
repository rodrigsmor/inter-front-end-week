import {
    UserInfo,
    HeaderWrapper,
    HeaderContainer,
} from './styled';

import UserCircle from '../UserCircle';
import { useNavigate } from 'react-router-dom';
import logoInter from '../../assets/images/Inter-orange.png';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img
                    src={logoInter}
                    width={172}
                    height={61}
                    alt={'logo Inter'}
                />
                <UserInfo>
                    <UserCircle initials={'PF'} />
                    <div>
                        <p>
                            Olá,
                            <span className={'primary-color font-bold'}>
                                Pablo
                            </span>
                        </p>
                        <strong>22001123-1</strong>
                        <a href={' '} onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;