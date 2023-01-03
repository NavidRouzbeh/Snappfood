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
    {id:2 , image:cafe , title:"کافه "},
    {id:3 , image:sweet , title:"شیرینی  "},
    {id:4 , image:bakery , title:"نانوا "},
    {id:5 , image:fruit , title:"میوه "},
    {id:6 , image:meat , title:"پروتئین "},
    {id:7 , image:icecream , title:"بستنی "},
    {id:8 , image:nut , title:"آجیل "},

]


