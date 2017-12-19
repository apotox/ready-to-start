import Promise from 'bluebird'
import debug from 'debug'



const a=()=>new Promise((success,err)=>{
    success(55)
})


a().then((x)=>console.log("t",x))