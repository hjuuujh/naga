/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import VideoStore from "store/VideoStore";
// function Author({ image, name, email }) {
//   return (
//     <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      
//       <SuiBox display="flex" flexDirection="column">
        
//       </SuiBox>
//     </SuiBox>
//   );
// }

// function Function({ job, org }) {
//   return (
    // <SuiBox display="flex" flexDirection="column">
//       <SuiTypography variant="caption" fontWeight="medium" textColor="text">
//         {job}
//       </SuiTypography>
//       <SuiTypography variant="caption" textColor="secondary">
//         {org}
//       </SuiTypography>
//     </SuiBox>
//   );
// }

export default {
  columns: [
    { name: "name", align: "left" },
    { name: "start", align: "left" },
    { name: "end", align: "left" },
    { name: "view", align: "center" },
  ],


  // rows: [
  //   {
  //     name: ( <SuiBox display="flex" flexDirection="column">
  //     <SuiTypography variant="button" fontWeight="medium">  &nbsp;&nbsp;&nbsp; 카메라  </SuiTypography>
  //     </SuiBox>),
  //     start:(<SuiTypography variant="caption" fontWeight="medium" textColor="text">
  //     시작 시간
  //   </SuiTypography>),
  //     end: (
  //       <SuiTypography variant="caption" textColor="text" fontWeight="medium">
  //        끝 시간
  //       </SuiTypography>
  //     ),
  //     view: (
  //       <SuiTypography
  //         component="a"
  //         variant="caption"
  //         textColor="secondary"
  //         fontWeight="medium"
  //       >
  //         View
  //       </SuiTypography>
  //     ),
  //   },
  // ],
};
