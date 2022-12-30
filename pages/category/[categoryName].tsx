import { PanoramaSharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getMarkets } from "../../API/getMarkets";
import CategorySidebarContainer from "../../Component/CategorySidebar/CategorySidebarContainer";
import NavbarSection from "../../Component/Home/NavbarSection/NavbarSection";
import SortingDropDown from "../../Component/SortingDropDown/SortingDropDown";
import DesktopVendor from "../../Component/VendorCard/DesktopVendorCard";
import VendorCard from "../../Component/VendorCard/VendorCard";
import { categoryData } from "../../Data/Main/categoryData";
interface CategoryNameProps {
    markets:[]
}


const CategoryName = ({markets}:CategoryNameProps) => {
    console.log(markets)
    return(

        <>
        <NavbarSection/>
        <Grid display={'flex'} flexDirection={'column'} sx={{py:10, px:2}}>
          <Grid display={'flex'} justifyContent={'flex-end'} sx={{width:'100%'}}>
            <SortingDropDown/>
          </Grid>
          <Grid display={'flex'} flexDirection={'row'} sx={{width:'100%'}}>
            <Grid sx={{minWidth:'25%'}}>
              <CategorySidebarContainer/>
            </Grid>
            <Grid>
              {markets.map(market=>
                <VendorCard/>
              )}
            </Grid>
          </Grid>
        </Grid>
        </>

    )

}

export async function getStaticProps(context:GetStaticPropsContext) {

    const markets = await getMarkets(context.params?.categoryName)  

    return {
      props: {
        markets,
      },
    }
  }
  

  export async function getStaticPaths() {
    return {
      paths: categoryData.map(item => ({params:{categoryName:item}})) ,
      fallback: true,
    }
  }
  
export default CategoryName;

