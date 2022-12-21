import React, { useState,useEffect } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    ContainerArea,
    Text,
    styles
} from './styles';
import logo from '../../assets/logo-rickandmorty3.png';
import api from '../../services/apifilmes';

export default function Result(props) {

    const nome = props.route.params.nome
    const [infos, setInfos] = useState(null);

    async function handleBuscar() {
        try {
            const { status, data } = await api.get(`/character/?name=${nome}`);

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite um personagem válido');
            } else {
                setInfos(data.results[0]);
                
            }


        } catch (error) {
            Alert.alert('Buscar', 'Digite um personagem válido');
        }
    };
    useEffect(() => {
        handleBuscar();
    }, [nome]);



    return (
        <Container>
            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                
            {infos &&
                <ContainerArea>
                    <Image   source={{uri: infos.image}} style={styles.image}/>
                    <Text>Nome: {infos.name}</Text>
                    <Text>Status: {infos.status}</Text>
                    <Text>Espécie: {infos.species}</Text>
                    <Text>Genero: {infos.gender}</Text>
                    <Text>Localização: {infos.location.name}</Text>
                </ContainerArea>
            }

                <Button
                    activeOpacity={0.8}
                    onPress={() => {
                        props.navigation.navigate('Home')

                    }}>
                    <ButtonText>
                        {'Voltar'}
                    </ButtonText>
                </Button>
            </Animation>

        </Container>
    );
}