import axios from "axios";

const url = "api/resume/user/experiences";

class UserExperienceService {
  //GET
  static getUserExperiences(userId,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId),
            language:String(language)
          }
        });
        var optionsDate= { year:"numeric", month:"2-digit", timeZone: 'UTC'};
        const data = res.data.map(experience => ({
          ...experience
        }));

        data.forEach(item => {
          if (item.startDate !== null){
            item.startDate = new Date(item.startDate).toLocaleDateString('en-US', optionsDate);
          }
          if (item.endDate !== null){
            item.endDate = new Date(item.endDate).toLocaleDateString('en-US', optionsDate);
          }
        });
        resolve(data);
      } catch (err){
        reject(err);
      }
    })
  }

}

export default UserExperienceService;