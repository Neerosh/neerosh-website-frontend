import axios from "axios";

const url = "api/resume/user/skills";

class UserSkillService {
  //GET posts
  static getUserSkills(userId){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId)
          }
        });
        const data = res.data;
        resolve(
          data.map(skill => ({
            ...skill
          }))
        );
      } catch (err){
        reject(err);
      }
    })
  }
}

export default UserSkillService;