import * as types from './mutation-types'
import * as axios from 'axios'
import {ipcRenderer} from 'electron'

const getAxiosClient = (state) => {
  return axios.create({
    baseURL: state.server.url,
    headers: {'Authorization': 'token ' + state.session.access_token},
    responseType: 'json'
  })
}

export const getToken = () => {
  ipcRenderer.send('github-oauth', 'getToken')
}

export const logout = ({commit}) => {
  return new Promise(resolve => {
    commit(types.REMOVE_ACCESS_TOKEN)
    commit(types.INIT_SESSION)
    commit(types.REMOVE_USER)
    resolve()
  })
}

export const getUser = async ({ commit, state }) => {
  try {
    const response = await getAxiosClient(state).get('/user')
    commit(types.SET_USER, response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getRepos = async ({commit, state}) => {
  try {
    const response = await getAxiosClient(state).get('/user/repos')
    commit(types.SET_USER_REPOS, response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const initApp = async ({commit, state}) => {
  try {
    const user = await getUser({commit, state})
    const repo = await getRepos({commit, state})
    if (!state.session.access_token) {
      return user
    }
    commit(types.SET_USER, user)
    commit(types.AUTHENTICATED, user)
    commit(types.SET_USER_REPOS, repo)

    return {user, repo}

  } catch (error) {
    console.log(error)  
  }
}
