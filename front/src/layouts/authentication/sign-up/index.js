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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import axios from 'axios';
// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {

  const [agreement, setAgremment] = useState(true);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [e_mail, setEmail] = useState();
  const [pw, setPw] = useState();
  const postRegisterInfo = () => {
    let username = e_mail
    let password = pw
    let first_name = name
    let last_name = number
    let email =e_mail
    console.log(username)
    axios.post('http://localhost:8000/user/',{
            username,
            password,
            first_name,
            last_name,
            email,
        }).then(function (res){
            console.log(res)

        }).catch(function (err){
            console.log(err)
            alert("사용불가능한 아이디입니다.")
        })
  }
  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Register with
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
          <Socials />
        </SuiBox>
        <Separator />
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput placeholder="Number" onChange={(e)=>setNumber(e.target.value)}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </SuiBox>
            
            
            
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
            {/* <Link to={{ pathname: `/dashboard`,  }}> */}
              <SuiButton variant="gradient" buttonColor="dark" fullWidth onClick={()=>postRegisterInfo()}>
                sign up
              </SuiButton>
              {/* </Link> */}
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" textColor="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  textColor="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
