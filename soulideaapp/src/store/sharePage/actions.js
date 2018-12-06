import axios from "axios"

export default{
    handleNow_getNowMovie(){
        //https://m.maizuo.com
        axios({
                method:"get",
                headers:{
                    'Content-type':'application/x-www-form-urlencoded'
                },
                ///share/public
                url:"/Soulidea-1.0/share/comments",
            }).then((data)=>{
               console.log(data)
               
               
            })
    }
}






// axios({
//     method:"get",
//     headers:{
//         'Content-type':'application/x-www-form-urlencoded'
//     },
//     ///share/publicetc
//     url:"/Soulidea-1.0/share/public",
// }).then((data)=>{
//     console.log(data)
// })


// axios({
//     method:"get",
//     url:"/v4/api/film/now-playing?",
//     data:{
//         page:1,
//         count:7
//     }
// }).then((data)=>{
//     console.log(data.data.data.films)
//     commit("handleNow_getNowMovie",data.data.data.films)
// })