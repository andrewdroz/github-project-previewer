export const store = {
  state: {
    username: "",
    repos: [],
    readmes: []
  },
  setUsername(newUsername) {
    this.state.username = newUsername;
    this.state.repos.length = 0;
  },
  populateRepoNames(response) {
    let dataArr = response.data;
    let count = 1;
    for (let i in dataArr) {
      store.state.repos.push({
        id: count,
        name: dataArr[i].name
      });

      count++;
    }
  }
};
