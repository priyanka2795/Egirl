import { deleteApi, getApi, postApi, postWithParams } from "./apis";

// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)

export const userLogin = (data:any) => postApi('/api/login',data)
// discord login
export const discordLogin = () => getApi('/discord/login')

export const discordCallback=() => getApi('/discord/callback?code=1')
// explore api
export const exploreGallery = (userId:string , page : number) => getApi(`/explore/explore/gallery/${userId}/${page}`)

export const exploreSwipe = (userId: string , page : number) => getApi(`/explore/explore/swipe/${userId}/${page}`)

export const exploreUserSubscription = (data:any) => postApi(`/explore/user-subscriptions` , data)
// profile api
export const profileCharacter = (id:string) => getApi(`/profile/character/${id}`)

export const profileInterest = (id:string) => getApi(`/profile/charater-interest/${id}`)

export const profilePost = (data:any) => postApi('/profile/post' , data)

export const profileFollow = (data:any) => postApi('/profile/follow' , data)

export const profileSubscribe = (data:any) => postApi('' , data)

export const profileYouMightLike = (userId : any) => getApi(`/profile/youmightlike/${userId}`)

export const profileComment = (data : any) => postApi('/profile/comment' , data)

export const profileBookmark = (data:any) => postApi('/profile/bookmark' , data)

// export const deleteProfileBookmark = (data:any) => deleteApi('/profile/bookmark') check bookmark to delete and api parameter

export const profileLike = (data : any) => postApi('profile/like' , data)

export const profileDetails = (postId : any , userId : any) => getApi(`/profile/post/${postId}/details?user_id=${userId}`)


//list apis
export const createCollection = (userId:any,collectionName:string) => postWithParams(`/lists/create-collection/?user_id=${userId}&collection_name=${collectionName}`)

export const getAllCollections = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/get-collections/${userId}/?page=${page}&items_per_page=${iterPerPage}`)

export const getSubscribed = (userId:any, page:number) => getApi(`/lists/subscriptions/${userId}/${page}`)

export const getFollowed = (userId:any, page:number) => getApi(`/lists/following/${userId}/${page}`)

export const getBookMarked = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/user/${userId}/bookmarked-posts/?page=${page}&items_per_page=${iterPerPage}`)
