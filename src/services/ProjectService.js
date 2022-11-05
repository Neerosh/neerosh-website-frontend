import axios from "axios";

const url = "api/project";

class ProjectService {
  //GET
  static getProjects(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data.map(project => ({
          ...project
        }));
        resolve(data);
      } catch (err){
        reject(err);
      }
    })
  }

}

export default ProjectService;