import React, {useEffect, useState} from "react";

import {
View,
Text,
StyleSheet
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App(){


const [usuario,setUsuario] = useState(null);


useEffect(()=>{

verificarLogin();

},[]);



async function verificarLogin(){

const dados =
await AsyncStorage.getItem("usuario");


if(dados){

setUsuario(JSON.parse(dados));

}

}



if(!usuario){

return <Login setUsuario={setUsuario}/>

}



return (

<Dashboard usuario={usuario}/>

);


}



function Login({setUsuario}){


const [nome,setNome]=useState("");
const [senha,setSenha]=useState("");

const {TextInput,TouchableOpacity}=require("react-native");



async function entrar(){


let acesso=null;



if(
nome==="Marielle"
&&
senha==="Mari123"
){

acesso={
nome:"Marielle",
nivel:"admin"
};


}



else if(
nome==="Gabriel"
&&
senha==="gabplay123456"
){


acesso={

nome:"Gabriel",
nivel:"visualizador"

};


}



if(acesso){

await AsyncStorage.setItem(
"usuario",
JSON.stringify(acesso)
);


setUsuario(acesso);


}else{

alert("Usuário ou senha incorretos");

}


}



return(

<View style={styles.center}>


<Text style={styles.logo}>
🌿 Espaço Bonsai
</Text>


<TextInput

placeholder="Usuário"

style={styles.input}

onChangeText={setNome}

/>



<TextInput

placeholder="Senha"

secureTextEntry

style={styles.input}

onChangeText={setSenha}

/>



<TouchableOpacity

style={styles.button}

onPress={entrar}

>


<Text style={styles.buttonText}>
Entrar
</Text>


</TouchableOpacity>



</View>


);

}






function Dashboard({usuario}){


return(

<View style={styles.container}>


<Text style={styles.title}>
🌿 Espaço Bonsai
</Text>


<Text>
Olá, {usuario.nome}
</Text>


<Text>
Acesso:
{
usuario.nivel==="admin"
?
" Administrador"
:
" Visualizador"
}
</Text>



<View style={styles.card}>


<Text>
🔔 Nova Reserva
</Text>


<Text>
Cliente: João
</Text>


<Text>
📅 20/07/2026
</Text>


{
usuario.nivel==="admin"
&&

<>

<Text style={styles.action}>
✅ Aceitar Reserva
</Text>


<Text style={styles.action}>
❌ Recusar Reserva
</Text>

</>

}



{
usuario.nivel==="visualizador"
&&

<Text>
👀 Somente visualização
</Text>

}



</View>


</View>

);

}





const styles=StyleSheet.create({


container:{
flex:1,
backgroundColor:"#F2F7F2",
padding:30
},


center:{
flex:1,
justifyContent:"center",
padding:30,
backgroundColor:"#F2F7F2"
},


logo:{
fontSize:28,
fontWeight:"bold",
color:"#176B3A",
textAlign:"center",
marginBottom:40
},


title:{
fontSize:30,
fontWeight:"bold",
color:"#176B3A",
marginBottom:20
},


input:{
backgroundColor:"#fff",
height:50,
borderRadius:15,
padding:15,
marginBottom:15
},


button:{
backgroundColor:"#176B3A",
padding:15,
borderRadius:15
},


buttonText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
},


card:{
backgroundColor:"#fff",
padding:25,
borderRadius:25,
marginTop:30
},


action:{
backgroundColor:"#176B3A",
color:"#fff",
padding:15,
marginTop:15,
borderRadius:10
}


});
