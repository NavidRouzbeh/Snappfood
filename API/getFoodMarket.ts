import { MainData } from "../Data/Main/MainData"

export const getFoodMarket = (market: string | string[] | undefined) => {
    return new Promise((resolve, reject)=>{
        resolve(MainData.filter(rest => rest.name === market))
    })
}