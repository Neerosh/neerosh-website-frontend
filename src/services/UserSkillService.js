import axios from "axios";

const url = "api/resume/user/skills";

class UserSkillService {
  //GET
  static getUserSkills(userId,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId),
            language:String(language)
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