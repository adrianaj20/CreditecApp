import { create } from 'zustand'


export const initialValueUser = {
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  birthday: '',
}

export const initialValueform = {
  fullname: '',
  edad: '',
  carrera: '',
  fechareserva: ''
} 

export const useGlobalStore = create((set) => ({
  isLogged: false,
  setIsLogged: () => set((state) => ({isLogged: !state.isLogged})),
  user: initialValueUser,
  setUser: (value) => set(() => ({user: value})),
  messages: [],
  setMessage: (value) => set(() => ({messages: value})),
  form: initialValueform,
  setForm: (value) => set(() => ({form: value}))
}))