import axios from "axios";

const url = "api/resume/experiences";

class ExperienceService {
  //GET posts
  static getExperiences(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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

export default ExperienceService;