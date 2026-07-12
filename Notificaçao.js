import React, {useState} from "react";

import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity,
Image
} from "react-native";


export default function Notificacoes(){


const [notificacoes,setNotificacoes] = useState([]);



function marcarComoLida(id){

setNotificacoes(

notificacoes.map(item =>

item.id === id

?

{
...item,
lida:true
}

:

item

)

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
🔔 Notificações
</Text>


</View>




<ScrollView>


{

notificacoes.length === 0 &&


<View style={styles.empty}>


<Text style={styles.emptyIcon}>
🌿
</Text>


<Text style={styles.emptyTitle}>
Nenhuma notificação
</Text>


<Text style={styles.emptyText}>
Quando alguém fizer uma reserva pelo site,
o aviso aparecerá aqui.
</Text>


</View>


}




{

notificacoes.map(item=>(


<TouchableOpacity

key={item.id}

onPress={()=>marcarComoLida(item.id)}

style={

[
styles.card,

item.lida && styles.lida

]

}


>


<View style={styles.row}>


<Image

source={require("../../assets/espacobonsai.png")}

style={styles.icon}

/>



<View>

<Text style={styles.message}>

{item.mensagem}

</Text>


<Text style={styles.date}>
{item.data}
</Text>


</View>


</View>




{

!item.lida &&

<Text style={styles.new}>
Nova reserva
</Text>

}



</TouchableOpacity>


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


header:{
alignItems:"center",
marginBottom:20
},


logo:{
width:70,
height:70,
borderRadius:35
},


title:{
fontSize:28,
fontWeight:"bold",
color:"#176B3A",
marginTop:10
},


empty:{
backgroundColor:"#fff",
padding:35,
borderRadius:25,
alignItems:"center"
},


emptyIcon:{
fontSize:40
},


emptyTitle:{
fontSize:20,
fontWeight:"bold"
},


emptyText:{
color:"#777",
textAlign:"center",
marginTop:10
},


card:{
backgroundColor:"#fff",
padding:20,
borderRadius:25,
marginBottom:15,
borderWidth:1,
borderColor:"#FFE58A"
},


lida:{
opacity:0.6
},


row:{
flexDirection:"row",
alignItems:"center"
},


icon:{
width:45,
height:45,
borderRadius:22
},


message:{
fontSize:16,
fontWeight:"bold",
marginLeft:15
},


date:{
marginLeft:15,
marginTop:5,
color:"#777"
},


new:{
backgroundColor:"#176B3A",
color:"#fff",
padding:6,
borderRadius:10,
alignSelf:"flex-start",
marginTop:15
}


});
