import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button,  Input} from 'semantic-ui-react'
import { observer } from 'mobx-react';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { styled, Box } from '@mui/system';
import LoginStore from "store/LoginStore";
import UserApi from 'api/UserApi';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};



function CameraModal() {
  const [camera, setCamera] = useState();
  const ls = LoginStore;
  const updateUser = () =>{
    const data = { "id" : ls.id, "number":ls.number , "camera": camera};
    UserApi.updateUser(data);
  }

  return (
    <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={ls.modalOpen}
        onClose={() => ls.setModalOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">카메라 이름</h2>
          <Input placeholder='Camera Name...' onChange={(e)=>{setCamera(e.target.value)}}/>
          
        <Button
        floated='right'
          content="등록"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {ls.setModalOpen(false);updateUser()}}
          positive
        />
        </Box>
      </StyledModal>

  )
}

export default observer(CameraModal);
