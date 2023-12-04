import Cookies from "js-cookie";
import { deleteApi, getApi, getApiWithToken, postApi, postApiWithToken, postApiWithTokenMultipart, postWithParams, putApi, putApiWithToken } from "./apis";


// Post Login data
export const userSignUp = (data:any) => postApi('/api/signup', data)
export const userLogin = (data:any) => postApi('/api/login',data)
export const refreshToken = (data:any)=>postApi('/api/token/refresh',data)

// discord login
export const discordLogin = () => getApi('/discord/login')
export const discordCallback=() => getApi('/discord/callback?code=1')
// google api
export const googleSignup = ()=> getApi('/google/signup')

export const googleLogin = ()=> getApi(`/google/login?origin_url=https://api.egirls.ai`)

export const googleCallback = () => getApi('/google/callback')

// app (room) api
export const getRooms = (token:string | null) => getApiWithToken(`/room/`, token)
export const createRoom = (data:any, token:string | null ) => postApiWithToken(`/room/`, data, token)
export const getRoomMessageById = (roomId:number, offset:number, limit:number, token:string | null) => getApiWithToken(`/room/${roomId}/messages?last_offset=${offset}&limit=${limit}`, token)
export const getMessageReactions = (token:string | null) => getApiWithToken(`/room/messages/reactions`, token)
export const updateMessageReaction = (data:any, token:string ) => postApiWithToken(`/room/message/reaction`, data, token)
export const roomVoiceMessage = (roomId:number, data:any, token:string ) => postApiWithToken(`/room/${roomId}/voice_message`, data, token)

// explore api
export const exploreGallery = (page : number, count:number, token:string | null) => getApiWithToken(`/explore/explore/gallery/${page}/${count}`, token)
export const exploreSwipe = (page : number, count:number, token:string | null) => getApiWithToken(`/explore/explore/swipe/${page}/${count}`, token)
export const exploreUserSubscription = (data:any, token:string ) => postApiWithToken(`/explore/user-subscriptions` , data, token)

// home (post) api
export const forYouPost = (page:number, limit:number, token:string | null) => getApiWithToken(`/posts/foryou/${page}/${limit}`, token)
export const postLike = (data:any, token:string ) => postApiWithToken(`/posts/like/`, data, token)
export const postComment = (data:any, token:string ) => postApiWithToken(`/posts/comment/`, data, token)
export const getPostComments = (postId:number, page:number, pageSize:number, token:string | null) => getApiWithToken(`/posts/post/${postId}/comments?page=${page}&page_size=${pageSize}`, token)
export const getPostSubscription = (page:number, limit:number, token:string | null) => getApiWithToken(`/posts/subscriptions/${page}/${limit}`, token)
// (will not use) export const getPostDetails = (postId:number, token:string | null) => getApiWithToken(`/posts/post/${postId}/details`, token)
export const postAddBookMark = (postId:number, token: string | null) => postWithParams(`/posts/post/${postId}/bookmark`, token)
export const postRemoveBookMark = (postId:number, token: string | null) => deleteApi(`/posts/post/${postId}/bookmark`, token)

// profile api
export const profileCharacter = (id:string, token:string | null) => getApiWithToken(`/profile/character/${id}`, token)
export const profileInterest = (id:string, token:string | null) => getApiWithToken(`/profile/character-interests/${id}`, token)
export const profilePost = (data:any) => postApi('/profile/post' , data)
export const profileFollow = (data:any) => postApi('/profile/follow' , data)
export const profileSubscribe = (data:any) => postApi('' , data)
export const profileYouMightLike = (userId : any, token:string | null) => getApiWithToken(`/profile/youmightlike/${userId}`, token)
export const profileComment = (data : any) => postApi('/profile/comment' , data)
export const profileBookmark = (data:any) => postApi('/profile/bookmark' , data)

// export const deleteProfileBookmark = (data:any) => deleteApi('/profile/bookmark') check bookmark to delete and api parameter
export const profileLike = (data : any) => postApi('profile/like' , data)
export const profileDetails = (postId : any , userId : any) => getApi(`/profile/post/${postId}/details?user_id=${userId}`)


//list apis
export const createCollection = (collectionName:string, token:string | null) => postWithParams(`/lists/create-collection/?collection_name=${collectionName}`, token)
export const getAllCollections = (page:number, count:number, token:string | null) => getApiWithToken(`/lists/get-collections/${page}/${count}`,token)
export const addCharacterToCollection = (collectionId:number | undefined, data:any, token:string ) => postApiWithToken(`/lists/add-characters-to-collection/${collectionId}`, data, token)
export const getSubscribed = (page:number, count:number, token:string | null) => getApiWithToken(`/lists/subscriptions/${page}/${count}`, token)
export const getFollowed = (page:number, count:number, token:string | null) => getApiWithToken(`/lists/following/${page}/${count}`, token)
export const getBookMarked = (page:number, count:number, token:string | null) => getApiWithToken(`/lists/user/bookmarked-posts/${page}/${count}`, token)

// creator studio api

export const getAllCharacter = (token:string|null) => getApiWithToken('/studio/character/get_all_characters' , token)

export const updateCharacter = (data:any , token : string | null)=> putApiWithToken('/studio/character/update_character' , data , token )

export const postCharacter = (data:any , token:any) => postApiWithToken('/studio/character/create_character' , data , token)

export const postUploadMedia = (data:any , token:any) => postApiWithTokenMultipart('/studio/character/upload_media' , data , token)

export const updateCharacterPersonality = (data:any , token : string | null)=> putApiWithToken('/studio/character/personality' , data , token)

export const postCharacterPersonality = (data:any , token:string|null) => postApiWithToken('/studio/character/create_personality' , data , token)

export const getGifts = (gift_category_id:any , token:string|null)=> getApiWithToken(`/studio/gift/fetch_gifts/${gift_category_id}`  , token) 

export const updateGifts = (data:any , token : string | null) => putApiWithToken('/studio/gift/update_gift' , data , token)

export const postGifts = (data:any , token : string|null) => postApiWithToken('/studio/gift/create_gift' , data , token)

export const deleteGift = (character_id:string , data:any , token:any)=> postApiWithToken(`/studio/gift/delete_gift/${character_id}` , data , token)

export const getGiftCategory = (character_id:string|null , token:string|null) => getApiWithToken(`/studio/gift/category/${character_id}`  , token)

export const updateGiftCategory = (data:any , token : string | null) => putApiWithToken('/studio/gift/category' , data , token)

export const postGiftCategory = (data:any , token:any) => postApiWithToken('/studio/gift/category' , data , token)

export const deleteGiftCategory = (characterId :string|null , giftCategoryId:number , token:string|null) => deleteApi(`/studio/gift/category/${characterId}/${giftCategoryId}` , token)

export const postPromptImage = (data:any, token:string | null) => postApiWithToken('/studio/image_generation/prompt_image' , data, token)

export const postInpaintImage = (data:any, token:string | null) => postApiWithToken('/studio/image_generation/inpaint_image' , data, token)

export const postPoseImage = (data:any, token:string | null) => postApiWithToken('/studio/image_generation/pose_image' , data, token)

export const getImageGeneration = (offset:number , limit:number, token:any) => getApiWithToken(`/studio/image_generation/?offset=${offset}&limit=${limit}`, token)

export const deleteImageGeneration = (id:number, token:any) => deleteApi(`/studio/image_generation/${id}`, token)


//logout function 
export const logout = ()=>{
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
    Cookies.remove("character_id")
    Cookies.remove('signUpUserId')
}
