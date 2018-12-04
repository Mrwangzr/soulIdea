import axios from "axios"
export default {
   getWorksMyList({commit}){
	   axios({
		   method:"get",
		   url:"Soulidea-1.0/showreel/getshowreelour?orderby=1",
	   }).then((data)=>{
			 console.log(data.data.data)
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
			 url:"Soulidea-1.0/showreel/getproductour"+"?id="+id
		 }).then((data)=>{
			 console.log(data)
			 commit("getproductour",data.data.data)
		 })
	 },
	 getproduct({commit},index){
		 axios({
			 method:"get",
			 url:"Soulidea-1.0/product/getproduct"+"/"+index
		 }).then((data)=>{
			 consloe.log(data)
				commit("getproduct",data.data.data)
		 })
	 },
// 	 addproduct({commit},id){
// 		 axios({
// 			 method:"get",
// 			 url:"Soulidea-1.0/product/addtoshowreel",
// 			 data:{
// 				 id:id
// 			 }
// 		 }).then((data)=>{
// 				commit("addproduct",data)
// 			}	
// 	 }
// 	 deletedData({commit},index){
// 		 axios({
// 		 	method:"delete",
// 		 	url:"http://localhost:3000/getproduct"+"/"+index
// 		 }).then((data)=>{
// 		 	console.log(data)
// 		 })
// 	 },
// 	 ReleasePortfolio({commit},obj){
// 		 axios({
// 			 method:"post",
// 			 url:"http://localhost:3000/ReleasePortfolio",
// 			data:{
// 				name:obj.name,
// 				contant:obj.introduce,
// 				tags:obj.tags
// 			}
// 		 }).then((data)=>{
// 
// 		 })
// 	 },
// 	DeletePortfolio({commit},index){
// 			axios({
// 				method:"delete",
// 				url:"http://localhost:3000/getproductour"+"/"+index,
// 			}).then((data)=>{
// 				console.log(data)
// 			})
// 	},
// 	GetTitleWork({commit}){
// 		axios({
// 			method:"get",
// 			url:"http://localhost:3000/joinoptions"
// 		}).then((data)=>{
// 			commit("GetTitleWork",data.data)
// 		})
// 	}
}
