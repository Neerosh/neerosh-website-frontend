import axios from "axios";

const url = "api/resume/educations";

class EducationService {
  //GET posts
  static getEducations(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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

export default EducationService;