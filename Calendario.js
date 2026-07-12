import React, {useState} from "react";

import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity
} from "react-native";


export default function Calendario(){


const [dias,setDias] = useState([]);



function corStatus(status){


if(status==="aguardando"){

return styles.amarelo;

}


if(status==="reservado"){

return styles.vermelho;

}


return styles.branco;


}





return(

<View style={styles.container}>


<Text style={styles.title}>
📅 Calendário
</Text>



<View style={styles.legenda}>


<Text>
⚪ Livre
</Text>


<Text>
🟡 Aguardando
</Text>


<Text>
🔴 Reservado
</Text>


</View>




<ScrollView>


{

dias.length === 0 &&


<View style={styles.empty}>


<Text style={styles.emptyTitle}>
Nenhuma reserva cadastrada
</Text>


<Text style={styles.emptyText}>
As datas aparecerão aqui quando clientes
fizerem reservas pelo site.
</Text>


</View>



}




{

dias.map(dia=>(


<View

key={dia.id}

style={[
styles.dia,
corStatus(dia.status)
]}


>


<Text style={styles.data}>
📅 {dia.data}
</Text>


<Text>
{

dia.status==="aguardando"

?

"🟡 Aguardando aprovação"

:

dia.status==="reservado"

?

"🔴 Reservado"

:

"⚪ Disponível"

}

</Text>


</View>


))


}



</ScrollView>


</View>


);

}





const styles=StyleSheet.create({


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


legenda:{
backgroundColor:"#fff",
padding:15,
borderRadius:20,
marginBottom:20
},


empty:{
backgroundColor:"#fff",
padding:30,
borderRadius:25,
alignItems:"center"
},


emptyTitle:{
fontSize:18,
fontWeight:"bold"
},


emptyText:{
marginTop:10,
textAlign:"center",
color:"#777"
},


dia:{
padding:20,
borderRadius:20,
marginBottom:15
},


branco:{
backgroundColor:"#fff"
},


amarelo:{
backgroundColor:"#FFE58A"
},


vermelho:{
backgroundColor:"#FF6B6B"
},


data:{
fontSize:18,
fontWeight:"bold",
marginBottom:8
}


});
