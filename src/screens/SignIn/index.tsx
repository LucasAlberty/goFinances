import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { AuthContext } from '../../AuthContext';

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

    const data = useContext(AuthContext)
    console.log(data)

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