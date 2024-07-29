import { Box, Grid } from "@mui/material";
import { HeroCard } from "./components/cards/hero-card";
import { LightCard } from "./components/cards/light-card";
import { WaterCard } from "./components/cards/water-card";

export default function App(props) {
  return (
    <Box
      width={2 / 3}
      my={4}
      display={"flex"}
      alignItems={"center"}
      gap={4}
      p={2}
      sx={{ margin: "auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeroCard user="John Doe" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <LightCard currentMonthUsage={0} lastMonthUsage={0} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <WaterCard />
        </Grid>
      </Grid>
    </Box>
  );
}
