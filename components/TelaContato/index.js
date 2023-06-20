import React from "react";
import { View, Text, ScrollView } from "react-native";
import estilos from "./estilos";

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TelaContato() {
    return (
        <ScrollView>
            <View style={estilos.container}>
                <View style={estilos.card}>
                    <FontAwesome name="phone" size={80} color="#400303" />
                    <Text style={estilos.titulo}>Telefone:</Text>
                    <Text style={estilos.descricao}>+55 21 000000000</Text>
                </View>

                <View style={estilos.card}>
                    <EvilIcons name="location" size={80} color="#400303" />
                    <Text style={estilos.titulo}>Endereço:</Text>
                    <Text style={estilos.descricao}>Av. 123, 222 - Rio de Janeiro RJ </Text>
                </View>

                <View style={estilos.card}>
                    <MaterialIcons name="email" size={80} color="#400303" />
                    <Text style={estilos.titulo}>Email:</Text>
                    <Text style={estilos.descricao}>preferida@adega.com.br</Text>
                </View>

                <View style={estilos.card}>
                    <AntDesign name='instagram' size={80} color={'#400303'} />
                    <Text style={estilos.titulo}>Instagram:</Text>
                    <Text style={estilos.descricao}>@adegapreferida</Text>
                </View>

            </View>
        </ScrollView>
    );
};