import axios from "axios";

const url = "api/resume/profile";

class ProfileService {
  //GET posts
  static getProfile(id){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            ID:String(id)
          }
        });
        resolve(res.data);
      } catch (err){
        reject(err);
      }
    })
  }

}

export default ProfileService;