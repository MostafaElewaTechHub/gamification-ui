import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { Active } from "src/sections/overview/active";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="20" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Active sx={{ height: "100%" }} value={40} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={20}
              positive={true}
              sx={{ height: "100%" }}
              value="16.6k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={60} />
          </Grid>

          <Grid xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={["T/F", "MCQ", "Points"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewLatestProducts
              products={[
                {
                  id: "5e887ac47eed253091be10cb",
                  city: "Giza",
                  avatar: "/assets/avatars/avatar-carson-darrin.png",
                  email: "carson.darrin@devias.io",
                  name: "Mostafa Elewa",
                },
                {
                  id: "5e887b7602bdbc4dbb234b27",
                  city: "Elmnia",
                  avatar: "/assets/avatars/avatar-jie-yan-song.png",
                  email: "jie.yan.song@devias.io",
                  name: "Hamza Gamal",
                },
                {
                  id: "5e86805e2bafd54f66cc95c3",
                  city: "Cairo",
                  avatar: "/assets/avatars/avatar-miron-vitold.png",
                  email: "miron.vitold@devias.io",
                  name: "Haytham Fadaly",
                },
                {
                  id: "5e887d0b3d090c1b8f162003",
                  city: "Giza",
                  avatar: "/assets/avatars/avatar-omar-darboe.png",
                  email: "omar.darobe@devias.io",
                  name: "Mohamed Ehab",
                },
                {
                  id: "5e8877da9a65442b11551975",
                  city: "Cairo",
                  avatar: "/assets/avatars/avatar-iulia-albu.png",
                  email: "iulia.albu@devias.io",
                  name: "Menna Ramadan",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={8}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "5ece2c077e39da27658aa8a9",
                  ref: "DEV1049",
                  name: "Car Name Game",
                  updatedAt: subHours(now, 6).getTime(),
                  count: 50,
                },
                {
                  id: "5ece2c0d16f70bff2cf86cd8",
                  ref: "DEV1048",
                  name: "Guess the City",
                  updatedAt: subDays(subHours(now, 8), 2).getTime(),
                  count: 30,
                },
                {
                  id: "b393ce1b09c1254c3a92c827",
                  ref: "DEV1047",
                  name: "Gadget Guess",
                  updatedAt: subDays(subHours(now, 1), 1).getTime(),
                  count: 25,
                },
                {
                  id: "a6ede15670da63f49f752c89",
                  ref: "DEV1046",
                  name: "Fawazeer Ramadan",
                  updatedAt: subDays(subHours(now, 3), 3).getTime(),
                  count: 20,
                },
                {
                  id: "bcad5524fe3a2f8f8620ceda",
                  ref: "DEV1045",
                  name: "Guess the Brand Name",
                  updatedAt: subDays(subHours(now, 5), 6).getTime(),
                  count: 10,
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
