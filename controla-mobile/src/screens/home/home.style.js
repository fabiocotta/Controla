import {ImageBackground} from "react-native";
import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 40
    },

    logo: {
        width: 100,
        height: 30
    },

    dashboard: {
        width: "100%",
        height: 90,
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"

    },

    dashboardText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm

    },

    dashboardImg: {
        width: 35,
        height: 60,
        padding: 5,
        marginTop: 5

    },

    despesaTitulo:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginTop: 50,
        fontWeight: "bold"
    
    }



}