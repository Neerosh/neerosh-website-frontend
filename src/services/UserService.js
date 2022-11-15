import axios from "axios";

const url = "api/resume/user";

class UserService {
  //GET
  static getUser(userId,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId),
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

export default UserService;