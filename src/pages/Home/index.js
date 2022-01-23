import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import  { useNavigation } from '@react-navigation/native';

import Artistas from '../../component/Artistas';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>INFOARTES</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>914-B</Text>        
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>ARTISTAS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Artistas img={require('../../assets/1.png')} onClick={()=> navigation.navigate('Detail') }>
            Leonardo Da Vinci
          </Artistas>
          <Artistas img={require('../../assets/2.png')} onClick={()=> navigation.navigate('Detail') }>
            Salvador Dalí
          </Artistas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Artistas img={require('../../assets/3.png')} onClick={()=> navigation.navigate('Detail') }>
            Michelangelo
            </Artistas>
            <Artistas img={require('../../assets/4.png')} onClick={()=> navigation.navigate('Detail') }>
            Vincent Van Gogh
            </Artistas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Artistas img={require('../../assets/5.png')} onClick={()=> navigation.navigate('Detail') }>
            Tarsila do Amaral
            </Artistas>
            <Artistas img={require('../../assets/6.png')} onClick={()=> navigation.navigate('Detail') }>
            Di Cavalcante
            </Artistas>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  header:{
    marginBottom: 8,
  },
  image:{
    width: '100%',
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});