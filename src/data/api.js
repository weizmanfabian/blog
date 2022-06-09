import axios from 'axios';

export const urlBase = "https://dummyapi.io/data/v1"

const appId = '62a22fd4e3b99f256de2bd7a'

const users = [
  { fullName: "Weizman Fabian Castañeda", user: "weizman@gmail.com", pass: '12345678' },
  { fullName: "Nancy Herreño", user: "nancy@gmail.com", pass: '12345678' }
]


export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${urlBase}/user`, {
      headers: {
        'app-id': appId
      }
    })
    return res
  } catch (err) {
    console.log(`err calling getAllUsers in api ${err}`);
  }
}

export const getAllPost = async (numberLimit) => {
  try {
    const res = await axios.get(`${urlBase}/post?limit=${numberLimit}`, {
      headers: {
        'app-id': appId
      }
    })
    return res
  } catch (err) {
    console.log(`err calling getAllPost in api ${err}`);
  }
}

export const getPost = async (id) => {
  try {
    const res = await axios.get(`${urlBase}/post/${id}`, {
      headers: {
        'app-id': appId
      }
    })
    return res
  } catch (err) {
    console.log(`err calling getAllPost in api ${err}`);
  }
}


export const login = async (form) => {
  try {
    const { user, pass } = await form
    const res = users.find(v => v.user === user)
    return res
      ? res.pass === pass
        ? { user: res }
        : { msg: 'Contraseña Incorrecta' }
      : { msg: 'Usuario no existe' }
  } catch (err) {
    console.log(`err calling login in api ${err}`);
  }
}
