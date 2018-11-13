import axios from "axios"
export default {
    productionListGet({commit}){
		axios({
			method:"get",
			url:"",
			data:{
				
			}
		}).then((data)=>{
			
			
			commit("productionListGet",data)
		})
	}
}