import axios from "axios";
export default{
    getPics({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/pics"

        }).then((data)=>{
            commit("getPics",data.data)
            console.log(data.data);
        })
        
    }

}