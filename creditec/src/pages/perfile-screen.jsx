import { View,Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { useGlobalStore,initialValueUser } from "../store/global.store"

export const PerfilScreen = () => {
  const {setIsLogged ,setUser, user} = useGlobalStore()

  const logout = () => {
    setIsLogged()
    setUser(initialValueUser)
  }

  return(
    <View style={{
      flex: 1, 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
    }}>
      <View style={styles.box}>
        <Image source={require('../../assets/profile-user.png')}/>
        <View>
          <Text style={styles.text_box}>Nombre:</Text>
          <Text style={styles.text_box}>Adrian Najarro</Text>
        </View>
        <View>
          <Text style={styles.text_box}>Correo:</Text>
          <Text style={styles.text_box}>{user.email}</Text>
        </View>
        <View>
          <Text style={styles.text_box}>Edad:</Text>
          <Text style={styles.text_box}>24</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#fff', fontWeight: '600' ,textAlign:'center'}}>Actualizar información</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()} style={styles.btn2}>
        <Text style={{color: '#fff', fontWeight: '600' ,textAlign:'center'}}>Cerrar Sesíon</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 10,
    color: '#fff',
    borderRadius: 12,
    backgroundColor: '#CD1212',
    paddingVertical: 15,
  },
  btn2: {
    width: '100%',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 12,
    color: '#fff',
    backgroundColor: '#124BCD'
  },
  box: {
    flex: 1, 
    marginTop: 30,
    gap: 20
  },
  text_box: {
    textAlign: 'center',
    fontSize: 20,
  }
})