import React from "react";

import {
View,
Text,
StyleSheet,
TouchableOpacity,
Image,
Alert
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Configuracoes({usuario, setUsuario}) {



async function sair(){

Alert.alert(
"Sair da conta",
"Deseja realmente sair do aplicativo?",
[
{
text:"Cancelar",
style:"cancel"
},

{
text:"Sair",
onPress: async ()=>{

await AsyncStorage.removeItem(
"usuario"
);

setUsuario(null);

}

}

]

);

}





return(


<View style={styles.container}>


<View style={styles.header}>


<Image

source={require("../../assets/espacobonsai.png")}

style={styles.logo}

/>


<Text style={styles.title}>
🌿 Espaço Bonsai
</Text>


<Text style={styles.version}>
Aplicativo Administrativo
</Text>


</View>




<View style={styles.card}>


<Text style={styles.section}>
👤 Usuário conectado
</Text>


<Text style={styles.info}>
{usuario.nome}
</Text>



<Text style={styles.section}>
🔐 Tipo de acesso
</Text>


<Text style={styles.info}>

{

usuario.nivel === "admin"

?

"👑 Administradora"

:

"👀 Visualizador"

}

</Text>



</View>





<View style={styles.card}>


<Text style={styles.section}>
📱 Informações do aplicativo
</Text>


<Text style={styles.info}>
Versão: 1.0.0
</Text>


<Text style={styles.info}>
Espaço Bonsai Admin
</Text>


<Text style={styles.info}>
Sistema de gerenciamento de reservas
</Text>



</View>





<TouchableOpacity

style={styles.logout}

onPress={sair}

>


<Text style={styles.logoutText}>
🚪 Sair da conta
</Text>


</TouchableOpacity>



</View>


);

}





const styles = StyleSheet.create({


container:{
flex:1,
backgroundColor:"#F3F7F1",
padding:20
},


header:{
alignItems:"center",
marginBottom:25
},


logo:{
width:90,
height:90,
borderRadius:45
},


title:{
fontSize:28,
fontWeight:"bold",
color:"#176B3A",
marginTop:10
},


version:{
color:"#777",
marginTop:5
},


card:{
backgroundColor:"#fff",
padding:20,
borderRadius:25,
marginBottom:20
},


section:{
fontSize:18,
fontWeight:"bold",
marginBottom:8
},


info:{
fontSize:16,
color:"#555",
marginBottom:15
},


logout:{
backgroundColor:"#EF4444",
padding:18,
borderRadius:20
},


logoutText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold",
fontSize:17
}


});
