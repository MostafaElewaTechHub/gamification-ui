import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ShowMoreForm from "src/components/showMoreForm";

function Page() {

  return (
    <>
      <Head>
        <title>Show More | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <ShowMoreForm />
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
