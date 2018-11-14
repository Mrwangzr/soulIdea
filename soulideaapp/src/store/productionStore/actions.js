import axios from "axios"
export default {
   getworkslist({commit}){
	   axios({
		   method:"get",
		   url:"http://localhost:3000/workslist",
	   }).then((data)=>{
			 commit("getworkslist",data.data)
		 })
   }
}