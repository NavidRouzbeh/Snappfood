import { StaticImageData } from "next/image"
import bakery from "../../Assets/Images/navbar/bakery.png"
import cafe from "../../Assets/Images/navbar/cafe.png"
import fruit from "../../Assets/Images/navbar/fruit.png"
import icecream from "../../Assets/Images/navbar/icecream.png"
import meat from "../../Assets/Images/navbar/meat.png"
import nut from "../../Assets/Images/navbar/nut.png"
import restoren from "../../Assets/Images/navbar/restoren.png"
import sweet from "../../Assets/Images/navbar/sweet.png"

export interface NavbarSectionType{
    id:number
    title:string,
    image:StaticImageData
}


export const NavbarSectionItem:NavbarSectionType[]=[
    {id:1 , image:restoren , title:"رستوران "},
    {id:1 , image:cafe , title:"کافه "},
    {id:1 , image:sweet , title:"شیرینی  "},
    {id:1 , image:bakery , title:"نانوا "},
    {id:1 , image:fruit , title:"میوه "},
    {id:1 , image:nut , title:"پروتین "},
    {id:1 , image:icecream , title:"بستنی "},
    {id:1 , image:meat , title:"آجیل "},

]


