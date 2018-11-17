import axios from "axios"
export default {
   getworkslist({commit}){
	   axios({
		   method:"get",
		   url:"http://localhost:3000/zuopingji",
	   }).then((data)=>{
			 console.log(data)
			 commit("getworkslist",data.data)
		 })
   },
	 getWorksMyList({commit}){
		 axios({
			 method:"get",
			 url:"http://localhost:3000/getproductour"
		 }).then((data)=>{
			 commit("getWorksMyList",data.data)
			
		 })
	 },
	 getproductour({commit}){
		 axios({
			 method:"get",
			 url:"http://localhost:3000/getproductour"
		 }).then((data)=>{
			 commit("getproductour",data.data)
		 })
	 },
	 getproduct({commit},index){
		 axios({
			 method:"get",
			 url:"http://localhost:3000/getproduct"+"/"+index
		 }).then((data)=>{
				commit("getproduct",data.data)
		 })
	 },
	 deletedData({commit},index){
		 axios({
		 	method:"delete",
		 	url:"http://localhost:3000/getproduct"+"/"+index
		 }).then((data)=>{
		 	console.log(data)
		 })
	 },
	 ReleasePortfolio({commit},obj){
		 axios({
			 method:"post",
			 url:"http://localhost:3000/ReleasePortfolio",
			data:{
				name:obj.name,
				contant:obj.introduce,
				tags:obj.tags
			}
		 }).then((data)=>{

		 })
	 },
	DeletePortfolio({commit},index){
			axios({
				method:"delete",
				url:"http://localhost:3000/getproductour"+"/"+index,
			}).then((data)=>{
				console.log(data)
			})
	},
	GetTitleWork({commit}){
		axios({
			method:"get",
			url:"http://localhost:3000/joinoptions"
		}).then((data)=>{
			commit("GetTitleWork",data.data)
		})
	}
}