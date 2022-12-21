import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
} from './styles';
import logo from '../../assets/logo-rickandmorty3.png';

export default function Home(props) {
    const [nome, setNome] = useState('');

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                <Input
                    keyboardType="text"
                    maxLength={100}
                    onChangeText={setNome}
                    placeholder="Digite o nome do personagem"
                    placeholderTextColor="green"
                    value={nome}
                />

                <Button
                    activeOpacity={0.8}
                    onPress={() => {
                        if (nome != ""){
                            props.navigation.navigate('Result',{nome})
                        }else{
                            Alert.alert('Digite um nome!')
                        }
                         }}
                >
                    <ButtonText>
                        {'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>


        </Container>
    );
}