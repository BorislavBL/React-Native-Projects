import { StatusBar } from "expo-status-bar"
import {useState, useEffect} from "react"
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

import pins from "../assets/data/pins"
import { useNavigation, useRoute } from "@react-navigation/native"

const PinScreen =()=>{
    const [ratio, setRatio] = useState(1);
    const insets = useSafeAreaInsets()
    const route = useRoute()
    const navigation = useNavigation();


    const pinId = route.params?.key
    const pin  = pins.find((p)=>p.key===pinId)

    const goBack = () => {
        navigation.goBack();
    }
    
    useEffect(()=>{
      if(pin?.image){
      Image.getSize(pin.image, (width, height)=>{
        setRatio(width/height)
      })
    }}, [pin])

    if(!pin){
        return(<Text>Pin not found</Text>)
    }

    return(
        <SafeAreaView style={{backgroundColor:"black"}}>
            <StatusBar style="light"/>
            <View style={styles.root}>
                <Image source={{uri:pin.image}} style = {[styles.image, {aspectRatio:ratio}]}/>
                <Text style={styles.title}>{pin.title}</Text>
            </View>
            <Pressable onPress={goBack} style={[styles.backBin, {top:insets.top+20}]}>
                <Ionicons name={"chevron-back"} size={35} color ={"white"}/>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root:{
        height:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    image:{
        width:"100%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    title:{
        margin:10,
        fontSize:24,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:35,
    },
    backBin:{
        position:"absolute",
        left:10,
    }
})

export default PinScreen;