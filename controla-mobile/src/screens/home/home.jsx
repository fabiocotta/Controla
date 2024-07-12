import { View, Text, Image } from "react-native";
import icons from "../../constants/icons.js";
import {styles} from "./home.style.js";
import Despesa from "../../components/despesa/depesa.jsx";

//componente home
const Home = () => {
    return <View style={styles.container}>
        
        <Image source={icons.logo} style={styles.logo} />
        
        
        <View style={styles.dashboard}>
                <View>
                    <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
                    <Text style={styles.dashboardText}>Total de Despesas</Text>
                </View>
                
                <Image style={styles.dashboardImg} source={icons.money} />
     


       
        </View>
 

       <View>
            <Text style={styles.despesaTitulo}>Despesas</Text>
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            

        </View>
   </View>
    
}

export default Home;