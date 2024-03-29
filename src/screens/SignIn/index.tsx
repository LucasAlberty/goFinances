import React from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth'

import { SignSocialButton } from '../../components/SignInSocialButton';


import { 
    Container,
    Header,
    Title, 
    TitleWrapper,
    SignInTitle,
    Footer,
    FooterWrapper
 } from './styels'

export function SignIn(){
    const { signInWithGoogle } = useAuth()

    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel conectar a conta Google')
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg 
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples 
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle> 
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignSocialButton 
                        title='Entrar com Google'
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    <SignSocialButton 
                        title='Entrar com Apple'
                        svg={AppleSvg}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    )
}