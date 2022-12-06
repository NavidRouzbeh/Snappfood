import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { CategoryTypes } from "./CategoryContainer";

const CategoryCards = ({ pic, title }: CategoryTypes) => {
  return (
    <Grid
      item
      xs={4}
      sm={3.5}
      md={1.5}
      alignItems={"center"}
      flexShrink={0}
      p={"5px"}
      height={"fit-content"}
      borderRadius={2}
      boxShadow={
        "rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 30%) 0px 8px 32px -16px;"
      }
    >
      <Grid display={"flex"} sx={{ position: "relative" }} height={{xs:110, md: 100 }}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 4,
            objectFit: "cover",
          }}
          src={pic}
          alt=""
        />
        <Grid
          container
          sx={{ position: "absolute", display: { xs: "none", sm: "flex" } }}
          bottom={0}
          right={0}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            bgcolor={"white"}
            p={"3px"}
            borderRadius={"4px 0 4px 0"}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
              {title}
            </Typography>
            <ArrowBackIosRoundedIcon
              sx={{ fontSize: 15, mr: 2, color: "primary.main" }}
            />
          </Grid>
        </Grid>
        <Grid
          display={{ xs: "flex", sm: "none" }}
          position={"absolute"}
          right={40}
          top={30}

        >
          <Typography variant="subtitle2" sx={{ color: "white" }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryCards;
