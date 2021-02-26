import { StyleSheet, Text, Image, View } from 'react-native';

import React, {useEffect, useState} from 'react';


export default function Hello({phrase1, avatar,phrase2}) {

  const[phraseA, setPhraseA]= useState(phrase1);
  const[phraseB, setPhraseB]= useState(phrase2);
console.log(phraseA, phraseB)

 // const tab = phrase1.split(" ");    
  
  // Afficher les valeurs du tableau 
 // for(const i = 0; i < tab.length; i++){
  //  document.write("" + tab[i] + "");
    //console.log(tab[i]);
  //}

    
        
        return<View>
        <View >
        <Text>{phraseA}</Text>
            <Image source={avatar} style={{width:60, height:100}}/>
            <Text>{phraseB}</Text>
            
           </View>
     
        
    </View>

}

const styles = StyleSheet.create({
    homeApp:{
      flex:1,
      flexDirection:"column"
    },
})  