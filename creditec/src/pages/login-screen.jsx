import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useGlobalStore} from '../store/global.store'
import {loginService} from '../services/user.service'
import { useState } from "react";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { setUser, isLogged, setIsLogged} = useGlobalStore()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const toNavigate = (to) => navigation.navigate(to) 

  const onChange = (text, field) => {
    setForm(prev => ({
      ...prev,
      [field]: text
    }))
  }

  const onSubmit =async () => {
    if(form.email.trim() !== "" && form.password.trim() !== "") {
      const user = await loginService(form)
      console.log(user)
      setUser(user)
      setIsLogged()
    }
  }

  return(
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
    style={{
      backgroundColor: '#fff',
      display: 'flex',
    }}
    >
      <View style={{
        padding: 20,
        marginTop: 100,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 20,
      }}>
        <Image style={{
          height: 280,
          resizeMode: 'center'
        }} source={require('../../assets/creditec.png')}/>
        <View style={styles.boxinput}>
          <TextInput
            onChangeText={(text) => onChange(text, 'email')}
            style={styles.textinput}
            placeholder="Correo"
          />
          <TextInput
            onChangeText={(text) => onChange(text, 'password')}
            style={styles.textinput}
            secureTextEntry={true}
            placeholder="Contraseña"
          />
        </View>
        <View style={styles.boxbtn}>
          <TouchableOpacity 
            onPress={() => onSubmit()}
            style={styles.btn}>
            <Text style={styles.btntext}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerbox}>
          <Text style={styles.textuno}>No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => {
            toNavigate('register')
          }} style={styles.textdosbox}>
            <Text style={styles.textdos}>Registrate Aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  textinput: {
    width: '100%',
    borderRadius: 12,
    padding: 15,
    color: '#000',
    borderWidth: 1,
  },
  boxinput: {
    width: '100%',
    gap: 20,
  },
  boxbtn: {
    width: '100%'
  },
  btn: {
    backgroundColor: '#124BCD',
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    height: 44
  },
  btntext: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  },
  textuno: {
    textAlign: 'center'
  },
  textdos: {
    color: '#124BCD',
    textAlign: 'center'
  }
})