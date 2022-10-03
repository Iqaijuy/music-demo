//网络请求方法
//封装好处1：便于修改；好处2：便于更换（以后不用axios，你只要替换这里即可），逻辑页面不用动
import axios from "axios";

const ajax = axios.create({//自定义axios对象 （ajax就是axios）
  baseURL:'http://localhost:3000' //服务器基地址
})

export default ajax;//相当于导出了一个axios函数