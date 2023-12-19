import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useGlobalStore,initialValueform } from "../store/global.store"
import { useEffect, useState } from "react"
import { Feather } from '@expo/vector-icons'; 
import {sendData} from '../services/email.service'

export const ContactanosScreen = () => {
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState(false)
  const {messages,setMessage, form, setForm } = useGlobalStore()

  const sendBotMsg = (value) => 
      setTimeout(() => {
        setMessage([...messages, value])
      }, 250)

  useEffect(() => {
    if(messages.length === 1) {
      sendBotMsg('nombre completo?')
    }
    if(messages.length === 3) {
      setForm({
        ...form,
        fullname: messages[2]
      })
      sendBotMsg('edad?')
    }
    if(messages.length === 5) {
      setForm({
        ...form,
        edad: messages[4]
      })
      sendBotMsg('carrera?')
    }
    if(messages.length === 7) {
      setForm({
        ...form,
        carrera: messages[6]
      })
      sendBotMsg('fecha de reserva?')
    }
    if(messages.length === 9) {
      setForm({
        ...form,
        fechareserva: messages[messages.length-1]
      })
      setTimeout(() => {
        sendEmail2(messages[8])
      }, 300);
    }

  },[messages])

  const cleanChat = () => {
    setIsActive(false)
    setForm(initialValueform)
    setMessage([])
  }
  const sendEmail2 = (value) => {
    sendData(form, value)
    setIsActive(true)
  }

  return(
    <KeyboardAwareScrollView 
      showsHorizontalScrollIndicator={false}
      style={{
      }}
    >
      <View style={{
        padding: 20,
        flex: 1, 
        gap: 20,
      }}>
        <View style={{flexDirection: 'row', gap: 10 }}>
          <TextInput
          value={text}
            onChangeText={(text) => setText(text)}
            style={styles.textinput}
            placeholder="Escribe un mensaje"
          />
          <TouchableOpacity disabled={isActive} style={styles.btn} onPress={() => {
            if(text.trim() === '') return
            setMessage([...messages, text])
            setText("")
          }}>
            <Text style={styles.btntext}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => {
              sendEmail2()
              // cleanChat()
          }}>
            <Feather name="trash" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View >
          {
            messages.map((e, index) => (
              <View key={index} style={[index%2!= 0 ?  styles.cardboxtext2 : styles.cardboxtext]}>
                <Text style={[index%2!= 0 ?  styles.cardtext2 : styles.cardtext]}>{e}</Text>
              </View>
            ))
          }
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  cardboxtext2: {
    borderWidth: 1,
    borderColor: '#fefefe',
    marginVertical: 5,
    padding: 11,
    backgroundColor: '#124BCD',
    borderRadius: 12,
  },
  cardboxtext: {
    borderWidth: 1,
    borderColor: '#fefefe',
    padding: 11,
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor: '#fcfcfc'
  },
  cardtext: {
  },
  cardtext2: {
    color: 'white'
  },
  btn2: {
    padding: 10,
    color: '#fff',
    height: 44,
    borderRadius: 12,
    backgroundColor: '#CD1212',
  },
  textinput: {
    borderRadius: 12,
    padding: 15,
    flex: 1,
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
    justifyContent: 'center',
    width: 80,
    backgroundColor: '#124BCD',
    borderRadius: 12,
    height: 44
  },
  btntext: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  },
  btntext2: {
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