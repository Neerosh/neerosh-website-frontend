import axios from "axios";

const url = "api/resume/skills";

class SkillService {
  //GET posts
  static getSkills(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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

export default SkillService;