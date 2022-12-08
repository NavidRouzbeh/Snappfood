import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CategoryCards from "./CategoryCard";
import { categorydata } from "../../../Data/CategorySection/CategorySection.data";

const CategoryContainer = () => {
  return (
    <Grid xs={11} position={'relative'} top={{xs:230,md:80}} sx={{ direction: "rtl" }}>
      <Grid p={3} mr={{ md: -1.5 }}>
        <Typography variant="subtitle2" sx={{ color: "rgb(83, 86, 92)" }}>
          دسته‌ بندی‌ ها
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        height={{ md: 200 }}
        xs={12}
        sx={{
          flexWrap: { xs: "nowrap", sm: "wrap" },
          overflowX: { xs: "scroll", sm: "hidden" },
          mr: { md: 4 },
        }}
        gap={4}
      >
        {categorydata.map((item) => (
          <CategoryCards {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
