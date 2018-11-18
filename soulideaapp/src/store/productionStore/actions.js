import axios from "axios"
export default {
   getWorksMyList({commit}){
	   axios({
		   method:"get",
		   url:"Soulidea-1.0/showreel/getshowreelour?orderby=1",
	   }).then((data)=>{
			 commit("getWorksMyList",data.data.data)
		 })
   },
	 getworkslist({commit}){
		 axios({
			 method:"get",
			 url:"Soulidea-1.0/product/getallproduct"
		 }).then((data)=>{
			 
			 commit("getworkslist",data.data.data)
		 })
	 },
	 getproductour({commit},id){
		 axios({
			 method:"get",
			 url:"Soulidea-1.0/showreel/getproductour?id="+id
		 }).then((data)=>{
			 commit("getproductour",data.data.data)
		 })
	 },
	 getproduct({commit},index){
		 axios({
			 method:"get",
			 url:"Soulidea-1.0/product/getproduct/"+index
		 }).then((data)=>{
				commit("getproduct",data.data.data.src)
		 })
	 },
	 getphotoinfo({commit},id){
		 axios({
		 	method:"get",
		 	url:"Soulidea-1.0/product/getphotoinfo?id="+id
		 }).then((data)=>{
		 	commit("getphotoinfo",data.data.data)
		 })
	 },
	
}
