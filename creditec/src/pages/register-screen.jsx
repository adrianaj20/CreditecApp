import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { registerService } from '../services/user.service' 
import { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useGlobalStore} from '../store/global.store'

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const {setUser, setIsLogged} = useGlobalStore()
  const [form, setForm] = useState({
    email: '',
    password: '', 
    birthday: '', 
    fullname: '',
    confirmpassword: ''
  })

  const toNavigate = (to) => navigation.navigate(to) 

  const onChange = (text, keyOf) => {
    setForm(prev => ({
      ...prev,
      [keyOf]: text
    }))
  }

  const onSubmit = async () => {
    if(form.password === form.confirmpassword) {
      await registerService(form)
      setUser(form)
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
        marginTop: 30,
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
            onChangeText={(text) => onChange(text,'fullname')}
            style={styles.textinput}
            placeholder="Nombre Completo"
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => onChange(text,'email')}
            placeholder="Correo"
          />
          <TextInput
            onChangeText={(text) => onChange(text,'password')}
            style={styles.textinput}
            secureTextEntry={true}
            placeholder="Contraseña"
          />
          <TextInput
            onChangeText={(text) => onChange(text,'confirmpassword')}
            style={styles.textinput}
            secureTextEntry={true}
            placeholder="Confirmar Contraseña"
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => onChange(text,'birthday')}
            placeholder="Fecha de nacimiento"
          />
        </View>
        <View style={styles.boxbtn}>
          <TouchableOpacity 
            onPress={() => onSubmit()}
            style={styles.btn}>
            <Text style={styles.btntext}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerbox}>
          <Text style={styles.textuno}>Tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => {
            toNavigate('login')
          }} style={styles.textdosbox}>
            <Text style={styles.textdos}>Inicia Sesión</Text>
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