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

export const postApiWithToken = async (url: string, data: any, token: string|null) => {
  try {
    let apiUrl = `${config.serverURL}${url}`;
    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`, // Add the Authorization header with the token
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postApiWithTokenMultipart = async (url: string, formData: FormData, token: string | null) => {
  try {
    let apiUrl = `${config.serverURL}${url}`;
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`, // Add the Authorization header with the token
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};




export const postWithParams = async (url: string, token: string | null) => {
  try {
    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.post(apiUrl, {},{
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

export const putApiWithToken = async(url:string, data:any, token:string|null)=>{
  try{

    let apiUrl = `${config.serverURL}${url}`
    const response = await axios.put(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":"application/json",
        accept: "application/json",
      },
    })
    return response
  } catch (error) {
    return error
  }
}

export const putApi = async (url:string, data:any, multipart = false) => {
  try {
    const apiUrl = `${config.serverURL}${url}`;
    const response = await axios.put(apiUrl, data, {
      headers: {
        'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
        accept: 'application/json',
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
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


