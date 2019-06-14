import React, { Component } from 'react';

import { View } from 'react-native';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import uberx from '../../assets/uberx.png';
export default class Details extends Component {
  render() {
    return <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens Baratas para o dia dia</TypeDescription>
        <TypeImage source={uberx}/>
        <TypeTitle>R$6,00</TypeTitle>
        <RequestButton onPress={()=>{}}>
            <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
    </Container>;
  }
}
