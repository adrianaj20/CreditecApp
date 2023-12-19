import * as emitjs from '@emailjs/browser'
import moment from 'moment'

emitjs.init('MPWzEOQIb9qXnVmhT')



export function sendData(form,value) {
    console.log(value, form, 'nose')
    emitjs.send('service_g87wtnh', 'template_j82w5zh', {
        'nombre': form.fullname,
        'edad': form.edad,
        'carrera': form.carrera,
        'fecha': value,
    })
    .catch(err => {
        console.log(err)
    })
}