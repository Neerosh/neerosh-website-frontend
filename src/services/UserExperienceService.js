import axios from "axios";

const url = "api/resume/user/experiences";

class UserExperienceService {
  //GET posts
  static getUserExperiences(userId){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId)
          }
        });
        const data = res.data;
        resolve(
          data.map(experience => ({
            ...experience
          }))
        );

      } catch (err){
        reject(err);
      }
    })
  }

}

export default UserExperienceService;