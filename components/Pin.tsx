
import { StyleSheet,Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Pin = (props:any)=>{
    const {key, title, image} = props.pin;
    const [ratio, setRatio] = useState(1);
    const navigation = useNavigation();

    const goToPinPage = () =>{
      navigation.navigate("Pin", {key})
    }

    useEffect(()=>{
      if(image){
      Image.getSize(image, (width, height)=>{
        setRatio(width/height)
      })
    }}, [image])

    const onLike = () => {

    }

    return(
        <Pressable onPress={goToPinPage} style={styles.pin}>
            <View>
            <Image 
                source = {{uri:image}}
                style={[styles.image, {aspectRatio:ratio}]}
            />
            <Pressable onPress={onLike} style={styles.heartButton}>
                <AntDesign name="hearto" size={16} color="black"/>
            </Pressable>
            </View>
            <Text numberOfLines={2} style={styles.title}>{title}</Text> 
        </Pressable> 
    )
}

export default Pin

const styles = StyleSheet.create({
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      margin:10,
    },
    image:{
      borderRadius:25,
    },
    pin:{
      padding:5,
      width:"100%"
    },
    heartButton:{
        position:'absolute',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        height:30,
        width:30,
        backgroundColor:'rgb(150,150,150)',
        bottom:10,
        right:10,
    }
  });