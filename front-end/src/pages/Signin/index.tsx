import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    Wrapper,
    Background,
    InputContainer,
    ButtonContainer
} from './styled'

import Card from '../../components/Card';

import Input from '../../components/input';
import Button from '../../components/button';
import logoInter from '../../assets/images/Inter-orange.png';
import background from '../../assets/images/background-login.jpg';

const SignIn = () => {
    const navigate = useNavigate();

    const handleToSignIn = () => {
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <Background  image={background} />
            <Card width={'403px'}>
                <img
                    src={logoInter}
                    width={172}
                    height={61}
                    alt={'logo inter'}
                />

                <InputContainer>
                    <Input placeholder={'EMAIL'} type={'email'} />
                    <Input placeholder={'SENHA'} type={'password'}/>
                </InputContainer>

                <ButtonContainer>
                    <Button 
                        type={'button'}
                        onClick={handleToSignIn}
                    >
                        Entrar
                    </Button>
                    <p>
                        Ainda não é cadastrado?
                        <Link to={'/signup'}>Cadastre-se já</Link>
                    </p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    );
}

export default SignIn;