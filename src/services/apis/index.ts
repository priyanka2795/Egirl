import axios from 'axios'
import config from './config'

export const postApi = async (url: string, data: any) => {
    try {
        let apiUrl = `${config.serverURL}${url}`
        const response = await axios.post(apiUrl, data,{
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

export const postApiWithToken = async(url: string, data: any, token: string | null, multipart?: boolean) => {
  try{
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.post(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": multipart ? "multipart/form-data" : "application/json",
        accept: "application/json",
      },
    })
    return response
  }catch(error){
    return error
  }
}

export const getApi = () => {

}

