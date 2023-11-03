import { postApi ,postWithParams,getApi} from "./apis";

// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)
export const userLogin = (data:any) => postApi('/api/login',data)

//list apis
export const createCollection = (userId:any,collectionName:string) => postWithParams(`/lists/create-collection/?user_id=${userId}&collection_name=${collectionName}`)
export const getAllCollections = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/get-collections/${userId}/?page=${page}&items_per_page=${iterPerPage}`)
export const getSubscribed = (userId:any, page:number) => getApi(`/lists/subscriptions/${userId}/${page}`)
export const getFollowed = (userId:any, page:number) => getApi(`/lists/following/${userId}/${page}`)
export const getBookMarked = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/user/${userId}/bookmarked-posts/?page=${page}&items_per_page=${iterPerPage}`)