import axios from 'axios'
import router from "@/router"

var instance=axios.create(); //创建axios的实例
//全局拦截
instance.interceptors.request.use()

