import { useState } from 'react';
import { StyleSheet, Image, ScrollView, useWindowDimensions, } from 'react-native';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';

interface IMasonryList {
  pins:{
    key:string;
    image:string;
    title:string;
  }[];
}

const MasonryList = ({pins}: IMasonryList) => {
  const width = useWindowDimensions().width
  const numColums = Math.ceil(width/260);
  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColums)).map((_, colIndex)=>(
          <View style={styles.coloum}>
          {pins.filter((item, index)=>index%numColums===colIndex).map((pin)=>(<Pin pin ={pin} key={pin.key}/>))}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding:10
  },
  coloum:{
    flex:1,
  }
});

export default MasonryList