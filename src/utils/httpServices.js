import { toast } from "react-toastify";

export const getService = async(url,isNotify) => {
    const requestOptions = {
        method: "GET",
    };
    try {
        const response = await fetch(import.meta.env.VITE_BASE_URL + url, requestOptions)
        const {data,message,success} = await response.json()
        console.log("getService", isNotify)
        if(isNotify){
            if(success){
                toast.success(message)
            }else{
                toast.error(message)
            }  
        }
         
        return {data,message,success}
    } catch (error) {
        console.log(error)
        return error
    }
}

export const postService = async(url,body,isNotify) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
    };
  
    try {
        const response = await fetch(import.meta.env.VITE_BASE_URL + url,requestOptions)
        const {data,message,success} = await response.json()
        if(isNotify){
            if(success){
                toast.success(message)
            }else{
                toast.error(message)
            }  
        } 
        console.log({data,message,success})
        return {data,message,success}
        
    } catch (error) {
        console.log(error)
        
    }
}
