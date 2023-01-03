import { MainData } from "../Data/Main/MainData"

export const getMarkets = (category:string) => {
    return new Promise((resolve, reject)=>{
        resolve(MainData.filter(rest => rest.category === category))
    })
}