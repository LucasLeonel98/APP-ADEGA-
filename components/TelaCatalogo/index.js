import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import vinhoBranco from '../../assets/vinho-branco.jpg';
import vinhoRose from '../../assets/vinho-rose.jpg';
import vinhoSeco from '../../assets/vinho-seco.jpg';
import vinhoEspecial from '../../assets/vinho-especial.jpg';
import estilos from "./estilos";




export default function TelaCatalogo() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.tituloPagina}>Nossos vinhos</Text>
            <Text style={estilos.descricaoPagina}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

            <ScrollView >
                <View style={estilos.card}>
                    <View style={estilos.boxImage}>
                        <Image source={vinhoBranco} style={estilos.imgVinho} />
                    </View>
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.titulo}>Chatigny Chardonnay</Text>
                        <Text style={estilos.subtitulo}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                    </View>
                </View>

                <View style={estilos.card}>
                    <View style={estilos.boxImage}>
                        <Image source={vinhoRose} style={estilos.imgVinho} />
                    </View>
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.titulo}>Concha y Toro Exportacion</Text>
                        <Text style={estilos.subtitulo}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
                    </View>

                </View>

                <View style={estilos.card}>
                    <View style={estilos.boxImage}>
                        <Image source={vinhoSeco} style={estilos.imgVinho} />
                    </View>
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.titulo}>Portada Winemaker's</Text>
                        <Text style={estilos.subtitulo}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
                    </View>
                </View>

                <View style={estilos.card}>
                    <View style={estilos.boxImage}>
                        <Image source={vinhoEspecial} style={estilos.imgVinho} />
                    </View>
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.titulo}>Elvio Cogno Ravera Barolo</Text>
                        <Text style={estilos.subtitulo}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};