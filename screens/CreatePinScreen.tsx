import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput , StyleSheet,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("")

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {
    
  }

  return (
    <View style={styles.root}>
      <Button title="Upload your Pin" onPress={pickImage} />
      {image && (
        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Image source={{ uri: image }} style={styles.image} />
            <TextInput placeholder="Title..." style={styles.input} value={title} onChangeText={setTitle}/>
            <Button title="Submit Pin" onPress={onSubmit}/>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    root:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 10
    },
    input:{
        borderWidth:1,
        borderColor:"rgb(200,200,200)",
        padding:10,
        width:"100%",
        borderRadius:25,
        color:"rgb(200,200,200)",
    },
    image:{
        width: "100%", 
        aspectRatio:1,
        marginVertical:20,
        borderRadius:25,
    }
})