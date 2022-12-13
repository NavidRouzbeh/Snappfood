import { StaticImageData } from "next/image"
import pizza from "../../Assets/Images/CategoryPageSidebar/pizza.png";
import persian from "../../Assets/Images/CategoryPageSidebar/aash.png";
import kabab from "../../Assets/Images/CategoryPageSidebar/kabab.png";
import salad from "../../Assets/Images/CategoryPageSidebar/salad.png";
import seafood from "../../Assets/Images/CategoryPageSidebar/daryayi.png";
import international from "../../Assets/Images/CategoryPageSidebar/sooshi.png";

export interface CategorySidebarType{
    id:number
    title:string,
    image:StaticImageData
}


export const CategorySidebarData:CategorySidebarType[]=[
    {id:1 , image:pizza , title:"فست‌فود"},
    {id:2 , image:persian , title:"ایرانی "},
    {id:3 , image:kabab , title:"کباب"},
    {id:4 , image:salad , title:"سالاد"},
    {id:5 , image:seafood , title:"دریایی"},
    {id:6 , image:international , title:"بین‌الملل"}
]