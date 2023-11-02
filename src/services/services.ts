import { getApi, postApi } from "./apis";

// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)
// explore api
export const exploreGallery = (userId:string , page : number) => getApi(`/explore/explore/gallery/${userId}/${page}`)

export const exploreSwipe = (userId: string , page : number) => getApi(`/explore/explore/swipe/${userId}/${page}`)

export const exploreUser = (data:any) => postApi(`/explore/user-subscriptions` , data)

//lists api
export const listsSubscriptions = (userId : string , page:number) => getApi(`/lists/subscription/${userId}/${page}`)

export const listsFollowing = (userId:string , page:number) => getApi(`/lists/following/${userId}/${page}`)

export const listCreate = (data:any) => postApi('/lists/create-collection/' , data)

export const listAddCharater = (collectionId:any ) => postApi(`/lists/add-characters-to-collection/${collectionId}` , collectionId) // check its body/data to be send

export const listsGetCollection = (userId:string) => getApi(`/lists/get-collections/${userId}`)

export const listsBookmarkedPost = (userId:string) => getApi(`lists/user/${userId}/bookmarked-posts/`)  // check its parameter

// profile api
export const profileCharacter = (id:string) => getApi(`/profile/character/${id}`)

export const profileInterest = (id:string) => getApi(`/profile/charater-interest/${id}`)

export const profilePost = (data:any) => postApi('/profile/post' , data)

export const profileFollow = (data:any) => postApi('/profile/follow' , data)

export const profileSubscribe = (data:any) => postApi('' , data)