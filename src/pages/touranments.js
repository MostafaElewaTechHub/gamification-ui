import Head from "next/head";
import { Box, Container } from "@mui/material";
import axios from "axios";

import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import BasicTable from "src/components/touranmentsTable";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:5000/api/v1/tournament/all";

const keys = {
  title: "title",
  category: "category",
  sort_order: "sort order",
  max_size: "maximum size",
  start_time: "start time",
  operator: "operator",
  "": "",
  "": "",
};
function Page({}) {
  const token = localStorage.getItem("jwt");
  console.log(token);
  const [tournment, setTournment] = useState();
  // const tournment = [1, 2];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      console.log(token);

      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response;
      console.log("🚀 ~ file: touranments.js:48 ~ fetchData ~ data:", data.data);
      setTournment(data.data);
      setLoading(false);

      console.log(typeof data.data);
    };
    fetchData();
  }, []);
  console.log(tournment);
  return (
    <>
      <Head>
        <title>Touranments | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          {loading ? <h1>loading</h1> : <BasicTable objects={keys} tournments={tournment} />}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
