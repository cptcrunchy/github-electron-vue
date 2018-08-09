export const isAuthenticated = (state) => {
  return !!state.session.access_token;
};

export const username = (state) => {
  return state.session.user.login ? state.session.user.login : '';
}

export const avatarUrl = (state) => {
  return state.session.user.avatar_url;
}

export const onAuthenticated = (state) => {
  return state.session.ready;
}

export const getRepos = (state) => {
  const userRepos = Array.from(state.session.repos)
  
  const codeupRepos =  userRepos.filter(repo => {
      return repo.full_name.toLowerCase().includes('codeup-'.toLowerCase())
    })
    .map(codeupRepos => {
      return codeupRepos.full_name.substring(state.session.user.login.length + 1)
    })
  return codeupRepos
}