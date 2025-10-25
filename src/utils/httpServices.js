import { toast } from "react-toastify";

export const getService = async(url) => {
    const requestOptions = {
        method: "GET",
    };
    try {
        const response = await fetch(url, requestOptions)
        const {data,message,success} = await response.json()
        if(success){
            toast.success(message)
        }else{
            toast.error(message)
        }  
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

