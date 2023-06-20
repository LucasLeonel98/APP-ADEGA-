import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    card: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: 360,
        height: 150,
        backgroundColor: '#ab887c',
        marginBottom: 5,
        borderRadius: 10,
        padding: 5
    },
    imgVinho: {
        height: 140,
        width: 80,
        resizeMode: "center",
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 14,
        color: '#fff',
        textAlign: "justify"
    },
    boxImage: {
        flex: 1,

    },
    boxTexto: {
        flex: 4,
        alignItems: "flex-start",
        alignContent: "flex-start",
        paddingHorizontal: 3
    },
    tituloPagina: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5
    },
    descricaoPagina: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10
    }
});

export default estilos;