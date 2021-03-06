import axios from "@/utils/axiosRequest"
import { AxiosResponse } from "axios"
import { Login, UserInfo } from "@/types/system/user"
import { ServiceEnum } from "@/enums"
import { ResponseResult } from "@/utils/types"

export const api = {
  login: "/login",
  logout: "logout",
  userInfo: `${ServiceEnum.SystemPath}/user/getUserInfo`,
}

export function loginApi(params: Login): Promise<AxiosResponse<string>> {
  return axios.post<string>(api.login, params)
}

export function logout(): Promise<AxiosResponse<string>> {
  return axios.post(api.logout)
}

export function getUserInfo(): Promise<AxiosResponse<ResponseResult<UserInfo>>> {
  console.log(api.userInfo)

  return axios.post<ResponseResult<UserInfo>>(api.userInfo)
}
