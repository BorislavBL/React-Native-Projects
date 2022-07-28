import { StyleSheet, Image, ScrollView} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import MasonryList from '../components/MasonryList';
import { Text, View } from '../components/Themed';
import pins from '../assets/data/pins'
import { Entypo, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={[styles.icons,{top:insets.top}]}>
          <Feather name="share" size={24} color="white" style={styles.icon}/>
          <Entypo name="dots-three-horizontal" size={24} color="white" style={styles.icon}/>
        </View>
        <Image source={{uri:"https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/58749247_2304943423055039_5097710582136569856_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5DMPcVKnr4AX8QpJU-&_nc_ht=scontent.fsof10-1.fna&oh=00_AT_n6WY7bO6yhvkgRrp1BeRljKDCPyradySY_dkE9HrG1A&oe=630044F7"}} style={styles.image}/>
        <Text style={styles.title}>Borislav Lorinkov</Text>
        <Text style={styles.subTitle}>123 Followers | 765 Following</Text>
      </View>
      <MasonryList pins={pins}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:20,
  },
  image:{
    width: 200,
    aspectRatio:1,
    borderRadius: 200,
    marginTop: 20,
  },
  subTitle:{
    color:"rgb(240,240,240)",
    fontWeight:"600"
  },
  icons:{
    flexDirection:"row",
    alignSelf:"flex-end",
    padding:10
  },
  icon:{
    paddingHorizontal:10,
  }

});

