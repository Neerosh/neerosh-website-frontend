import axios from "axios";

const url = "api/resume/user/info";

class UserInfoService {
  //GET posts
  static getUserInfo(id,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(id),
            language:String(language)
          }
        });
        resolve(res.data);
      } catch (err){
        reject(err);
      }
    })
  }

}

export default UserInfoService;