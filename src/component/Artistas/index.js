import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Artistas(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} >
      <Image
        source={props.img}
        style={styles.artistaImg}
      />
      <Text style={styles.artistaText}>
          {filterDesc(props.children)}
      </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    artistaImg:{
        width: 175,
        height: 175,
    },
    artistaText:{
        fontSize: 16,
    }
});