module.exports = {
  sources: {
    repoUrl: 'https://github.com/chamerling/electron-oauth-github-vue'
  },
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID || '09310fc5f6b68c9db0e9',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '730af408be5856b169b8fd080afd7eaba18e6b7e',
    authorizationUrl: 'http://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};
