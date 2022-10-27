import axios from "axios";

const url = "api/resume/user/educations";

class UserEducationService {
  //GET posts
  static getUserEducations(userId){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId)
          }
        });
        const data = res.data;
        resolve(
          data.map(education => ({
            ...education
          }))
        );

      } catch (err){
        reject(err);
      }
    })
  }

}

export default UserEducationService;