import axios from "axios";

const url = "api/resume/user/educations";

class UserEducationService {
  //GET posts
  static getUserEducations(userId,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId),
            language:String(language)
          }
        });
        var optionsDate= { year:"numeric", month:"2-digit", timeZone: 'UTC'};
        const data = res.data.map(education => ({
          ...education
        }));

        data.forEach(item => {
          if (item.startDate !== null){
            console.log(item.startDate)
            item.startDate = new Date(item.startDate).toLocaleDateString('en-US', optionsDate);
          }
          if (item.endDate !== null){
            console.log(item.endDate)
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

export default UserEducationService;