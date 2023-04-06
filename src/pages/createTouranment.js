import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import TouranmentForm from "src/components/touranmentForm";

const baseURL = "http://localhost:5000/api/v1/tournament";

function Page() {
  console.log(new Date().getTime());
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [message, setMessage] = useState("");
  const [joinRequired, setJoinRequired] = useState("");
  const [subject, setSubject] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [operator, setOperator] = useState("best");
  const [maxSize, setMaxSize] = useState("");
  const [startTime, setStartTime] = useState(Math.floor(new Date().getTime() / 1000));
  const [governorate, setGovernorate] = useState("Giza");
  const [endTime, setEndTime] = useState(0);

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
          <TouranmentForm />
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
