import axios from "axios";

const url = "api/resume/user/educations";

class UserEducationService {
  //GET
  static getUserEducations(userId,language){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url,{
          params:{
            userId:String(userId),
            language:String(language)
          }
        });
        const data = res.data.map(education => ({
          ...education
        }));
        resolve(data);
      } catch (err){
        reject(err);
      }
    })
  }
  static sortSkillsListByDate(array,dateColumn,orderAscending){
    array.sort(function(a, b){
      let date1 = new Date(a[dateColumn])
      let date2 = new Date(b[dateColumn])
      if (orderAscending){
        return date1 - date2;
      }
      return date2 - date1;
    })
  }
}

export default UserEducationService;