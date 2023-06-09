import Head from "next/head";
import { Box, Container } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import LinearProgress from "@mui/material/LinearProgress";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

import { SvgIcon } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import BasicTable from "src/components/touranmentsTable";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const baseURL = "http://localhost:5000/api/v1/tournament/all";

const keys = {
  title: "title",
  "": "",
  sort_order: "sort order",
  max_size: "maximum size",
  start_time: "start time",
  operator: "operator",
  "": "",
  "": "",
};
function Page({}) {
  const token = localStorage.getItem("jwt");
  const router = useRouter();

  const [tournment, setTournment] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response;
      setTournment(data.data);
      setLoading(false);
    };
    fetchData();
  }, [tournment]);

  return (
    <>
      <Head>
        <title>Touranments</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid item xs={12} sm={4}>
            <h1 style={{ "text-align": "center" }}>Tournments</h1>
          </Grid>
          <Grid item xs={12} sm={4} style={{ margin: "15px", "text-align": "right" }}>
            <Button
              onClick={() => {
                router.push("/createTouranment");
              }}
              variant="contained"
              type="submit"
              margin="normal"
              size="large"
              style={{ paddingLeft: "13px", paddingRight: "13px" }}
            >
              <SvgIcon fontSize="small">
                <PlusIcon />
              </SvgIcon>
              Create New
            </Button>
          </Grid>

          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <BasicTable objects={keys} tournments={tournment} />
          )}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
