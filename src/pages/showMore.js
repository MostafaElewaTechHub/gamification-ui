import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowMoreForm from "src/components/showMoreForm";
import { useRouter } from "next/router";
import { toNamespacedPath } from "path";
const baseURL = "http://localhost:5000/api/v1/tournament?id=";

function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [tournment, setTournment] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(`${baseURL}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response;
      // console.log(data.data.tournament);
      setTournment(data.data.tournament);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Show More</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          {tournment ? <ShowMoreForm tournment={tournment} /> : <h1>Loading</h1>}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
