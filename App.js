import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>🌿 Espaço Bonsai</Text>
        <Text style={styles.subtitle}>
          Painel da Proprietária
        </Text>
      </View>


      <ScrollView style={styles.content}>


        <Text style={styles.title}>
          Olá, Proprietária 👋
        </Text>


        <View style={styles.cards}>


          <View style={styles.card}>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.number}>3</Text>
            <Text>Solicitações</Text>
          </View>


          <View style={styles.card}>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.number}>12</Text>
            <Text>Aprovadas</Text>
          </View>


          <View style={styles.card}>
            <Text style={styles.icon}>📅</Text>
            <Text style={styles.number}>5</Text>
            <Text>Próximas</Text>
          </View>


        </View>



        <View style={styles.reserva}>


          <Text style={styles.sectionTitle}>
            🔔 Nova Solicitação
          </Text>


          <Text style={styles.info}>
            👤 Nome: Cliente teste
          </Text>


          <Text style={styles.info}>
            📱 WhatsApp: (19) 98295-8258
          </Text>


          <Text style={styles.info}>
            👥 Pessoas: 50
          </Text>


          <Text style={styles.info}>
            📅 Data: 20/07/2026 a 21/07/2026
          </Text>


          <Text style={styles.info}>
            🍲 Rechaud: Sim
          </Text>


          <Text style={styles.info}>
            🎂 Festa de aniversário: Não
          </Text>



          <View style={styles.pending}>
            <Text>
              🟡 Aguardando aprovação
            </Text>
          </View>



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


        </View>



        <View style={styles.calendar}>

          <Text style={styles.sectionTitle}>
            📅 Calendário
          </Text>


          <Text style={styles.date}>
            ⚪ 18/07/2026 - Disponível
          </Text>


          <Text style={styles.date}>
            🟡 20/07/2026 - Aguardando
          </Text>


          <Text style={styles.date}>
            🔴 25/07/2026 - Reservado
          </Text>


        </View>



      </ScrollView>


    </SafeAreaView>
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
  borderBottomRightRadius:30,
  alignItems:"center"
},


logo:{
  color:"#fff",
  fontSize:26,
  fontWeight:"bold"
},


subtitle:{
  color:"#d8f5d8",
  marginTop:5
},


content:{
  padding:20
},


title:{
  fontSize:24,
  fontWeight:"bold",
  marginBottom:20
},


cards:{
  flexDirection:"row",
  justifyContent:"space-between"
},


card:{
  backgroundColor:"#fff",
  width:"31%",
  padding:15,
  borderRadius:20,
  alignItems:"center",
  elevation:5
},


icon:{
  fontSize:25
},


number:{
  fontSize:24,
  fontWeight:"bold",
  color:"#176B3A"
},


reserva:{
  marginTop:25,
  backgroundColor:"#fff",
  padding:20,
  borderRadius:25,
  elevation:5
},


sectionTitle:{
  fontSize:20,
  fontWeight:"bold",
  marginBottom:15
},


info:{
  fontSize:16,
  marginBottom:8
},


pending:{
  backgroundColor:"#FFE58A",
  padding:12,
  borderRadius:15,
  marginVertical:15
},


accept:{
  backgroundColor:"#22C55E",
  padding:15,
  borderRadius:15,
  marginTop:10
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


calendar:{
  backgroundColor:"#fff",
  padding:20,
  borderRadius:25,
  marginTop:20,
  marginBottom:30,
  elevation:5
},


date:{
  fontSize:16,
  marginBottom:10
}


});
