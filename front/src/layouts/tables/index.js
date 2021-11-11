/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Table";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useEffect } from 'react';
import VideoStore from "store/VideoStore";

function row(datas) {
  
  VideoStore.videos.map((v) => (
    console.log(v.split("/"))
  ));
}

function Tables() {
  const classes = styles();
  const { columns } = authorsTableData;
  const data = VideoStore.videos;
  console.log(data)
  const vs = VideoStore;
  let rows = vs.videos;

  useEffect(() => {
    vs.selectAll();
    // VideoStore.videos.map((v) => {
    //   let d = v.split("/");
    //   let name = d[1];
    //   // console.log(d.length);
    //   let a = d[d.length-1].split("_");
    //   // console.log(a);
    //   let t = a[1].slice(0, a[1].length-4);
    //   // console.log(t);
    //   console.log(d[1], a[0], t);
    //   rows.push({
    //     name:d[1],
    //     start:a[0],
    //     end:t,
    //     view:"View"
    //   })
    // });
    // console.log(rows);
  },[]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Videos table</SuiTypography>
            </SuiBox>
            <SuiBox customClass={classes.tables_table}>
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
