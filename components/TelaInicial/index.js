import React from "react";
import { View, Text, ImageBackground } from "react-native";
import capa from '../../assets/capa.jpg'
import estilos from "./estilos";

export default function TelaInicial() {
    return (
        <ImageBackground source={capa} blurRadius={5} style={estilos.container} >
            <Text style={estilos.Titulo}>Adega Preferida</Text>
            <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>


    );
};