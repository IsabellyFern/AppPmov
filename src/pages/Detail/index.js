import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';


export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Leonardo Da Vinci'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail.png')}
       style={styles.image}
       resizeMode="cover"
       />

      <View>
        <View>
          <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Leonardo Da Vinci</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1452-1519</Text>
          </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Leonardo Da Vinci
          </Text>
          <Text style={styles.textContent}>
            Foi um pintor italiano e um dos maiores gênios de seu tempo. A tela "Mona Lisa", verdadeira obra-prima, o notabilizou como um dos principais pintores da Renascença.
          </Text>
          <Text style={styles.textContent}>
            Muitas de suas obras se perderam ou ficaram inacabadas. Conhecem-se apenas 12 telas de Leonardo de autenticidade reconhecida, sendo visível a importância que o artista concedeu aos contrastes entre luz e sombra e principalmente ao movimento.
          </Text>
          <Text>
            Foi na pintura que da Vinci mais se destacou, porém foi genial em diversos campos, como engenharia, arquitetura, urbanismo, mecânica, cartografia, balística, hidráulica, anatomia etc.
          </Text>
          <Text style={styles.textList}>
            - Obras mais famosas: Mona Lisa e A última ceia.
          </Text>
         </View>

        <View style={styles.line} />

        <Footer/>

        </View>
      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image:{
    width: '100%',
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});