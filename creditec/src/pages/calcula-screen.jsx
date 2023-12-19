import { View, Alert, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import {Checkbox} from 'expo-checkbox'
import { useState } from "react"

const PENCION = 1352
const MESES = 6

export const CalculaScreen = () => {
  const [form, setForm] = useState({
    tiempoCarrera: '',
    porcentage: '',
    ciclos: ''
  })

  const onSubmit = () => {
    const porcentage = parseInt(form.porcentage)
    const res = (((porcentage / 100) * PENCION)*6)*parseInt(form.ciclos)
    Alert.alert('Resultado calculado', `respuesta: ${res}`)
  }

  return(
    <View style={{
      flex: 1, 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
    }}>
      <Text>Seleccione el tiempo de carrera</Text>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row' ,justifyContent: 'center', gap: 30}}>
        <View style={styles.btncheck}>
          <Checkbox
            onValueChange={() => setForm(prev => ({...prev, tiempoCarrera: '2'}))}
            value={form.tiempoCarrera === '2'}
           />
          <Text>2 años</Text>
        </View>
        <View style={styles.btncheck}>
          <Checkbox
            onValueChange={() => setForm(prev => ({...prev, tiempoCarrera: '3'}))}
            value={form.tiempoCarrera === '3'}
           />
          <Text>3 años</Text>
        </View>
      </View>
      <Text>Porcentaje del credito</Text>
      <View style={{display: 'flex', width: '100%', justifyContent: 'center', gap: 30}}>
        <View style={{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'row', gap: 33}}>
          <View style={styles.btncheck}>
            <Checkbox
              onValueChange={() => setForm(prev => ({...prev, porcentage: '25'}))}
              value={form.porcentage === '25'}
             />
            <Text>25 %</Text>
          </View>
          <View style={styles.btncheck}>
            <Checkbox
              onValueChange={() => setForm(prev => ({...prev, porcentage: '50'}))}
              value={form.porcentage === '50'}
             />
            <Text>50 %</Text>
          </View>
        </View>
        <View style={{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'row', gap: 32, }}>
          <View style={styles.btncheck}>
            <Checkbox 
              onValueChange={() => setForm(prev => ({...prev, porcentage: '75'}))}
              value={form.porcentage === '75'}
            />

            <Text>75 %</Text>
          </View>
          <View style={styles.btncheck}>
            <Checkbox 
              onValueChange={() => setForm(prev => ({...prev, porcentage: '100'}))}
              value={form.porcentage === '100'}
             />
            <Text>100 %</Text>
          </View>
        </View>
      </View>
      <Text>Por cuántos ciclos necesitas el crédito?</Text>
      <View>
        <TextInput
          value={form.ciclos}
          onChangeText={(text) => setForm(prev => {
            const maxNumber = form.tiempoCarrera === '3' ? 6 : 4  
            const number = parseInt(text) 
            if(number > maxNumber) return {...prev, ciclos: maxNumber }
            return {...prev, ciclos: number }
          })}
          style={styles.inputtext}
          placeholder="0"
        />
      </View>
      <View>
        <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 30}}>Los montos mostrados son aproximados y referenciales. </Text>
        <Text style={{textAlign: 'center'}}>Sujetos a evaluación del Instituto.</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity 
          onPress={() => onSubmit()}
          style={styles.btn}>
          <Text style={styles.btntext}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  inputtext: {
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  btncheck: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
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
})