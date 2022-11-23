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
  static sortSkillsListByLevel(array,orderAscending){
    array.sort(function(a, b){
      let levelA = a.level;
      let levelB = b.level;

      if (orderAscending){
        switch (levelA){
          case 'Basic':
            if (levelB == 'Basic'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            return -1;
          case 'Básico':
            if (levelB == 'Básico'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            return -1;
          case 'Intermediary':
            if (levelB == 'Intermediary'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            if (levelB == 'Basic'){
              return 1;
            }
            return -1;
          case 'Intermediário':
            if (levelB == 'Intermediário'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            if (levelB == 'Básico'){
              return 1;
            }
            return -1;
          case 'Advanced':
            if (levelB == 'Advanced'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            return 1
          case 'Avançado':
            if (levelB == 'Avançado'){
              if (levelA < levelB) {return -1;}
              if (levelA > levelB) {return 1;}
              return 0;
            }
            return 1
        }
      }else{
        switch (levelA){
          case 'Basic':
            if (levelB == 'Basic'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            return 1;
          case 'Básico':
            if (levelB == 'Básico'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            return 1;
          case 'Intermediary':
            if (levelB == 'Intermediary'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            if (levelB == 'Basic'){
              return -1;
            }
            return 1;
          case 'Intermediário':
            if (levelB == 'Intermediário'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            if (levelB == 'Básico'){
              return -1;
            }
            return 1;
          case 'Advanced':
            if (levelB == 'Advanced'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            return -1
          case 'Avançado':
            if (levelB == 'Avançado'){
              if (levelB < levelA) {return -1;}
              if (levelB > levelA) {return 1;}
              return 0;
            }
            return -1
        }
      }
    })
  }
}

export default UserSkillService;