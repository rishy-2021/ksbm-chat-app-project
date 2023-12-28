import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../colors';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const catImageUrl =
  'https://ksbminfotech.com/wp-content/uploads/thegem-logos/logo_5f031e0e26962402549a17e954bf2b24_1x.png';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image
          source={{uri: catImageUrl}}
          style={{
            width: 90,
            height: 40,
            marginRight: 10,
          }}
        />
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.chatButton}>
          <Text style={{marginRight:10, fontSize:16, fontWeight:'600'}}> Start Messessing</Text>
        <IonIcon name="md-chatbubbles" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chatButton: {
    backgroundColor: 'gray',
    height: 50,
    width: "55%",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
