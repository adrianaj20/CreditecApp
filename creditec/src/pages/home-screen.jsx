import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const toNavigate = (to) => navigation.navigate(to) 

  return(
    <View style={{
      flex: 1, 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
    }}>
      <TouchableOpacity onPress={() => toNavigate('Perfil')} style={styles.cards}>
        <Image style={styles.img} source={require('../../assets/perfil-img.png')}/>
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toNavigate('Contacto')} style={styles.cards}>
        <Image style={styles.img} source={require('../../assets/perfil-img.png')}/>
        <Text style={styles.text}>Informate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toNavigate('Calcula')} style={styles.cards}>
        <Image style={styles.img} source={require('../../assets/perfil-img.png')}/>
        <Text style={styles.text}>Calcula</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toNavigate('Contacto')} style={styles.cards}>
        <Image style={styles.img} source={require('../../assets/perfil-img.png')}/>
        <Text style={styles.text}>Contáctanos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    position: 'aboslute'
  }, 
  img: {
  },
  text: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    right: 35
  }
})