import axios from 'axios'
import config from './config'

export const postApi = async (url: string, data: any) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response;
  } catch (error) {
    return error
  }
}

export const postWithParams = async (url: string) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.post(apiUrl, {
      headers: {
      "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}

export const getApi = async (url: string) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}


export const getApiWithToken = async (url: string, token: string | null) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}

export const putApiWithToken = async (url: string, data: any, token: string | null, multipart?: boolean) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.put(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": multipart ? "multipart/form-data" : "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}

export const deleteApi = async (url: any, token: String | null) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}

