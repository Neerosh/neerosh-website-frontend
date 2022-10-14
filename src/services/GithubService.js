import axios from "axios";

class GithubService {
  constructor(username){
    this.username = username
  }

  //Sort Rpositories By Date
  sortRepositoriesDate(repositoriesJSON){
    const repositoriesArray = [].slice.call(repositoriesJSON);
    const optionsDate= { day:"numeric", year:"numeric", month:"short", hour:"numeric",minute:"numeric"};

    repositoriesArray.sort(function(a, b){
      let date1 = new Date(a.pushed_at)
      let date2 = new Date(b.pushed_at)
      //order dates recent to older
      return date2 - date1;
    })

    repositoriesArray.forEach(repo => {
      let dateLastUpdate= new Date (repo.pushed_at);
      repo.updated_at = dateLastUpdate.toLocaleDateString('en-US', optionsDate);
    });

    return repositoriesArray
  }

  //GET Github User
  getUser(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('https://api.github.com/users/'+this.username);
        resolve(res.data);
      } catch (err){
        reject(err);
      }
    })
  }

  //GET Github User Repositories
  getUserRepositories(){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('https://api.github.com/users/'+this.username+'/repos');
        const data = res.data;
        resolve(
          data.map(repo => ({ ...repo }))
        );
      } catch (err){
        reject(err);
      }
    })
  }

}

export default GithubService;