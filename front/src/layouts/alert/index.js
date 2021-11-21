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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import axios from 'axios';

// 버튼 속성 참고
/*
SuiButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  buttonColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};
*/

function Alert() {
  const [msg, setMsg] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://192.168.117.24:8000/api/announce?message=' + msg);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold" >
              방송 메시지
            </SuiTypography>
          </SuiBox>
          <SuiInput type="text" placeholder="메시지" onChange={(e)=>setMsg(e.target.value)}/>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <SuiButton variant="gradient" buttonColor="info" fullWidth onClick={(e)=>handleSubmit(e)}>
            전송
          </SuiButton>
        </SuiBox>
      </SuiBox>

      <Card className="h-100">
        <SuiBox position="relative" height="100%" p={2}>
          <SuiBox>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
                <SuiButton
                  component="a"
                  href={'#'}
                  variant="gradient"
                  size="large"
                  buttonColor={'primary'}
                  style={{display: 'block'}}
                  onClick={e => {
                    e.preventDefault();
                    axios.get('http://192.168.117.24:8000/api/alert');
                  }}
                  >경고 - 삐 삐 삐
                </SuiButton>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SuiButton
                  component="a"
                  href={'#'}
                  variant="gradient"
                  size="large"
                  buttonColor={'warning'}
                  style={{display: 'block'}}
                  >경고 오디오 2
                </SuiButton>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SuiButton
                  component="a"
                  href={'#'}
                  variant="contained"
                  size="large"
                  buttonColor={'white'}
                  style={{display: 'block'}}
                  >경고 오디오 3
                </SuiButton>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SuiButton
                  component="a"
                  href={'#'}
                  variant="outlined"
                  size="large"
                  buttonColor={'error'}
                  style={{display: 'block'}}
                  >경고 오디오 3
                </SuiButton>
              </Grid>
            </Grid>
          </SuiBox>
        </SuiBox>

      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Alert;
