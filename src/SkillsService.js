import axios from "axios";

const url = "api/resume/skills";

class PostService {
  //GET posts
  static getPosts(){
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

export default PostService;