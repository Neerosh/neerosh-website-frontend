import axios from "axios";

const url = "api/resume/user/basic";

class UserBasicService {
  //GET posts
  static getUserBasic(id,language){
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

export default UserBasicService;