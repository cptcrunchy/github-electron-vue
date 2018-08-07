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

export const userRepos = async (state) => {
  console.log("state.session);
  const result = state.session;
  
  return result;
}