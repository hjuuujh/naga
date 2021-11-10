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
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import axios from 'axios';
import LoginStore from "store/LoginStore";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const ls = LoginStore;
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSubmit = (event) => {
    console.log(email, pw);
    axios.post('http://localhost:8000/login/',{
        username: email,
        password: pw
    }).then(function (res){
      localStorage.setItem('token', res.data.token);
      console.log(res)

       localStorage.setItem('user', email);
       localStorage.setItem('id', res.data.user.id);
       localStorage.setItem('firstname', res.data.user.first_name)
       localStorage.setItem('lastname', res.data.user.last_name)
       ls.setToken(res.data.token);
       ls.setUser(res.data.user.id, res.data.user.username, res.data.user.first_name,res.data.user.last_name);
       ls.userHasAuthenticated(true);
       }).catch(function (err){
        console.log(err)
        alert("아이디와 비밀번호를 확인하세요");
    })
    event.preventDefault();
}
  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold" >
              Email
            </SuiTypography>
          </SuiBox>
          <SuiInput type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold" >
              Password
            </SuiTypography>
          </SuiBox>
          <SuiInput type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)}/>
        </SuiBox>
        <SuiBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SuiTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            customClass="cursor-pointer user-select-none"
          >
            &nbsp;&nbsp;Remember me
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <SuiButton variant="gradient" buttonColor="info" fullWidth onClick={(e)=>handleSubmit(e)}>
            sign in
          </SuiButton>
        </SuiBox>
        <SuiBox mt={3} textAlign="center">
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SuiTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              textColor="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;
