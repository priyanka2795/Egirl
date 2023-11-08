import Cookies from "js-cookie";
import { deleteApi, getApi, postApi, postWithParams, getApiWithToken , postApiWithToken} from "./apis";


// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)
export const userLogin = (data:any) => postApi('/api/login',data)
export const refreshToken = (data:any)=>postApi('/api/token/refresh',data)

// discord login
export const discordLogin = () => getApi('/discord/login')
export const discordCallback=() => getApi('/discord/callback?code=1')

// app (room) api
export const getRooms = (token:string | null) => getApiWithToken(`/room/`, token)
export const createRoom = (data:any, token:string | null) => postApiWithToken(`/room/`, data, token)
export const getRoomMessageById = (roomId:number, offset:number, limit:number, token:string | null) => getApiWithToken(`/room/${roomId}/messages?last_offset=${offset}&limit=${limit}`, token)
export const getMessageReactions = (token:string | null) => getApiWithToken(`/room/messages/reactions`, token)
export const updateMessageReaction = (data:any, token:string | null) => postApiWithToken(`/room/message/reaction`, data, token)
export const roomVoiceMessage = (roomId:number, data:any, token:string | null) => postApiWithToken(`/room/${roomId}/voice_message`, data, token)

// explore api
export const exploreGallery = (userId:string , page : number, token:string | null) => getApiWithToken(`/explore/explore/gallery/${userId}/${page}`, token)
export const exploreSwipe = (userId: string , page : number, token:string | null) => getApiWithToken(`/explore/explore/swipe/${userId}/${page}`, token)
export const exploreUserSubscription = (data:any, token:string | null) => postApiWithToken(`/explore/user-subscriptions` , data, token)

// home (post) api
export const forYouPost = (page:number, limit:number, token:string | null) => getApiWithToken(`/posts/foryou/${page}/${limit}`, token)
export const postLike = (data:any, token:string | null) => postApiWithToken(`/posts/like/`, data, token)
export const postComment = (data:any, token:string | null) => postApiWithToken(`/posts/comment/`, data, token)
export const getPostComments = (postId:number, page:number, pageSize:number, token:string | null) => getApiWithToken(`/posts/post/${postId}/comments?page=${page}&page_size=${pageSize}`, token)
export const getPostSubscription = (page:number, token:string | null) => getApiWithToken(`/posts/subscriptions/${page}`, token)
export const getPostDetails = (postId:number, token:string | null) => getApiWithToken(`/posts/post/${postId}/details`, token)
export const postAddBookMark = (postId:number, token: string | null) => postWithParams(`/posts/post/${postId}/bookmark`, token)
export const postRemoveBookMark = (postId:number, token: string | null) => deleteApi(`/posts/post/${postId}/bookmark`, token)

// profile api
export const profileCharacter = (id:string, token:string | null) => getApiWithToken(`/profile/character/${id}`, token)
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
export const createCollection = (userId:any,collectionName:string, token:string | null) => postWithParams(`/lists/create-collection/?user_id=${userId}&collection_name=${collectionName}`, token)
export const getAllCollections = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/get-collections/${userId}/?page=${page}&items_per_page=${iterPerPage}`)
export const addCharacterToCollection = (collectionId:number | undefined, data:any) => postApi(`/lists/add-characters-to-collection/${collectionId}`, data)
export const getSubscribed = (userId:any, page:number) => getApi(`/lists/subscriptions/${userId}/${page}`)
export const getFollowed = (userId:any, page:number) => getApi(`/lists/following/${userId}/${page}`)
export const getBookMarked = (userId:any, page:number, iterPerPage:number) => getApi(`/lists/user/${userId}/bookmarked-posts/?page=${page}&items_per_page=${iterPerPage}`)

//logout function 
export const logout = ()=>{
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
}
