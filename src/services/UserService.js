import axios from "axios";

const url = "api/resume/user";

class UserService {
  //GET posts
  static getUser(id){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            id:String(id)
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