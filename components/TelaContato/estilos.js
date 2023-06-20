import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        padding: 20
    },
    card: {
        alignContent: "center",
        alignItems: "center",
        width: 350,
        height: 145,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dadada',
        marginBottom: 10,
        padding: 10
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#400303'
    },
    descricao: {
        fontSize: 16,
        color: '#400303'
    }
});

export default estilos;