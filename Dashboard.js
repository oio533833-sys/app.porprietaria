import React from "react";

import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView
} from "react-native";


export default function Dashboard({usuario}){


const admin = usuario.nivel === "admin";


return(

<View style={styles.container}>


<View style={styles.header}>


<Text style={styles.logo}>
🌿 Espaço Bonsai
</Text>


<Text style={styles.welcome}>
Olá, {usuario.nome}
</Text>


<Text style={styles.permission}>

{
admin
?
"👑 Administradora"
:
"👀 Visualizador"
}

</Text>


</View>




<ScrollView>


<View style={styles.cards}>


<View style={styles.card}>

<Text style={styles.icon}>
🔔
</Text>

<Text style={styles.number}>
3
</Text>

<Text>
Solicitações
</Text>

</View>



<View style={styles.card}>

<Text style={styles.icon}>
✅
</Text>

<Text style={styles.number}>
12
</Text>

<Text>
Confirmadas
</Text>

</View>



<View style={styles.card}>

<Text style={styles.icon}>
📅
</Text>

<Text style={styles.number}>
5
</Text>

<Text>
Próximas
</Text>

</View>



</View>





<View style={styles.reserva}>


<Text style={styles.title}>
🔔 Nova Reserva
</Text>



<Text>
👤 Cliente: João Silva
</Text>


<Text>
📱 WhatsApp: (19) 99999-9999
</Text>


<Text>
👥 Pessoas: 40
</Text>


<Text>
📅 20/07/2026 até 21/07/2026
</Text>


<Text>
🍲 Rechaud: Sim
</Text>


<Text>
🎂 Aniversário: Não
</Text>




<View style={styles.status}>

<Text>
🟡 Aguardando aprovação
</Text>

</View>




{
admin &&

<>


<TouchableOpacity style={styles.accept}>

<Text style={styles.buttonText}>
✅ Aceitar Reserva
</Text>

</TouchableOpacity>



<TouchableOpacity style={styles.reject}>

<Text style={styles.buttonText}>
❌ Recusar Reserva
</Text>

</TouchableOpacity>


</>

}





{
!admin &&

<Text style={styles.onlyView}>
👀 Você possui acesso somente para visualizar
</Text>

}




</View>





<View style={styles.calendar}>


<Text style={styles.title}>
📅 Calendário
</Text>


<Text>
⚪ 18/07/2026 - Disponível
</Text>


<Text>
🟡 20/07/2026 - Aguardando
</Text>


<Text>
🔴 25/07/2026 - Reservado
</Text>



</View>



</ScrollView>



</View>


);

}





const styles = StyleSheet.create({


container:{
flex:1,
backgroundColor:"#F3F7F1"
},


header:{
backgroundColor:"#176B3A",
padding:30,
borderBottomLeftRadius:30,
borderBottomRightRadius:30
},


logo:{
fontSize:26,
fontWeight:"bold",
color:"#fff"
},


welcome:{
color:"#fff",
fontSize:18,
marginTop:10
},


permission:{
color:"#d8ffd8",
marginTop:5
},


cards:{
flexDirection:"row",
justifyContent:"space-around",
padding:20
},


card:{
backgroundColor:"#fff",
width:"30%",
padding:15,
borderRadius:20,
alignItems:"center"
},


icon:{
fontSize:25
},


number:{
fontSize:22,
fontWeight:"bold",
color:"#176B3A"
},


reserva:{
backgroundColor:"#fff",
margin:20,
padding:20,
borderRadius:25
},


title:{
fontSize:20,
fontWeight:"bold",
marginBottom:15
},


status:{
backgroundColor:"#FFE58A",
padding:12,
borderRadius:15,
marginTop:15
},


accept:{
backgroundColor:"#22C55E",
padding:15,
borderRadius:15,
marginTop:15
},


reject:{
backgroundColor:"#EF4444",
padding:15,
borderRadius:15,
marginTop:10
},


buttonText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
},


onlyView:{
marginTop:15,
color:"#777"
},


calendar:{
backgroundColor:"#fff",
margin:20,
padding:20,
borderRadius:25
}


});
