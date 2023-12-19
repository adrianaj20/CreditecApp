import { View, Text, StyleSheet } from "react-native"

export const InformateScreen = () => {
  return(
    <View style={{
      flex: 1, 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
    }}>
      <Text style={{fontWeight: '400', fontSize: 20}}>Principales Requisitos</Text>
      <View style={styles.box}>
        <Text style={styles.text}>1. Tener Menos de 24 años de edad al momento de la solicitud.</Text>
        <Text style={styles.text}>2. No ser egresado de educacion superior.</Text>
        <Text style={styles.text}>3. Ser Alumno de Tecsup</Text>
        <Text style={styles.text}>4. No Tener los recursos económicos para asumir el pago de la pension</Text>
        <Text style={styles.text}>5. Contar con dos garantes</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  },
  box: {
    padding: 20,
    backgroundColor: 'rgba(18, 75, 205, 0.10)',
    borderRadius: 12,
    borderWidth: 1,
    gap: 20
  }
})