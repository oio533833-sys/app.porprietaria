import React, {useState} from "react";

import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity
} from "react-native";


export default function Reservas({usuario}){


const admin = usuario.nivel === "admin";


// Futuramente virá do banco de dados
const [reservas,setReservas] = useState([]);



function aceitar(id){

setReservas(

reservas.map(reserva =>

reserva.id === id

?

{
...reserva,
status:"confirmada"
}

:

reserva

)

);

}



function recusar(id){

setReservas(

reservas.map(reserva =>

reserva.id === id

?

{
...reserva,
status:"recusada"
}

:

reserva

)

);

}





return(

<View style={styles.container}>


<Text style={styles.title}>
📅 Reservas
</Text>



<ScrollView>


{

reservas.length === 0 &&


<View style={styles.empty}>


<Text style={styles.emptyText}>
Nenhuma reserva recebida.
</Text>


<Text style={styles.subText}>
Quando um cliente fizer uma solicitação
pelo site, aparecerá aqui.
</Text>


</View>



}




{

reservas.map(reserva=>(


<View 
key={reserva.id}
style={styles.card}
>


<Text style={styles.name}>
👤 {reserva.nome}
</Text>


<Text>
📱 WhatsApp: {reserva.whatsapp}
</Text>


<Text>
👥 Pessoas: {reserva.pessoas}
</Text>


<Text>
📅 Data: {reserva.data}
</Text>


<Text>
🍲 Rechaud: {reserva.rechaud}
</Text>


<Text>
🎂 Festa: {reserva.aniversario}
</Text>



<View style={

reserva.status === "aguardando"

?

styles.amarelo

:

reserva.status === "confirmada"

?

styles.vermelho

:

styles.branco

}>


<Text>

{

reserva.status === "aguardando"

?

"🟡 Aguardando aprovação"

:

reserva.status === "confirmada"

?

"🔴 Reservado"

:

"⚪ Recusado"

}


</Text>


</View>



{

admin && reserva.status === "aguardando" &&

<>


<TouchableOpacity

style={styles.accept}

onPress={()=>aceitar(reserva.id)}

>

<Text style={styles.button}>
✅ Aceitar Reserva
</Text>

</TouchableOpacity>




<TouchableOpacity

style={styles.reject}

onPress={()=>recusar(reserva.id)}

>

<Text style={styles.button}>
❌ Recusar Reserva
</Text>

</TouchableOpacity>


</>


}



</View>


))


}



</ScrollView>


</View>


);

}





const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F3F7F1",
padding:20
},


title:{
fontSize:28,
fontWeight:"bold",
color:"#176B3A",
marginBottom:20
},


empty:{
backgroundColor:"#fff",
padding:30,
borderRadius:25,
alignItems:"center"
},


emptyText:{
fontSize:18,
fontWeight:"bold"
},


subText:{
marginTop:10,
textAlign:"center",
color:"#777"
},


card:{
backgroundColor:"#fff",
padding:20,
borderRadius:25,
marginBottom:20
},


name:{
fontSize:20,
fontWeight:"bold",
marginBottom:10
},


amarelo:{
backgroundColor:"#FFE58A",
padding:12,
borderRadius:15,
marginTop:15
},


vermelho:{
backgroundColor:"#FF6B6B",
padding:12,
borderRadius:15,
marginTop:15
},


branco:{
backgroundColor:"#eee",
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


button:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
}


});
