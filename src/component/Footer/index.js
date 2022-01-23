import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Artistas from '../Artistas';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Artistas img={require('../../assets/5.png')}>
                    Tarsila do Amaral   
                </Artistas>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Artistas img={require('../../assets/3.png')}>
                    Michelangelo 
                </Artistas>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Artistas img={require('../../assets/4.png')}>
                    Vincent Van Gogh   
                </Artistas>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
});