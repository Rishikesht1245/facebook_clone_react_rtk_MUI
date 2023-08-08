import React from "react";
import {
  Avatar,
  Box,
  Card,
  InputBase,
  Divider,
  IconButton,
  Typography,
  Modal,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CollectionsIcon from "@mui/icons-material/Collections";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import avatar from "../assets/avatar.jpg";
import styled from "@emotion/styled";
import { useState } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GifBoxIcon from "@mui/icons-material/GifBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
  margin: "auto",
  marginBottom: "15px",
  borderRadius: "25px",
  width: "80%",
}));

// custom modal
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// userBox to display in mobile devices
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
}));

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box mb={3}>
        <Card pb={5} pt={5} sx={{ padding: "20px 0" }}>
          <Search>
            <Avatar
              sx={{ width: "45px", height: "45px", marginRight: "15px" }}
              src={avatar}
            ></Avatar>
            <InputBase
              placeholder="What's on your mind, Samuel?"
              sx={{ width: { xs: "50%", md: "100%" }, color: "text.primary" }}
              onClick={(e) => setOpen(true)}
            />
          </Search>
          <Divider variant="middle" />
          <Box
            sx={{
              maxWidth: "80%",
              display: "flex",
              justifyContent: "space-around",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            <IconButton
              aria-label="share"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <VideoCallIcon sx={{ color: "red", fontSize: "35px" }} />
              <Typography
                variant="small"
                sx={{ fontSize: "16px", marginLeft: "8px" }}
              >
                Live video
              </Typography>
            </IconButton>
            <IconButton
              aria-label="share"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CollectionsIcon sx={{ color: "green", fontSize: "30px" }} />
              <Typography
                variant="small"
                sx={{ fontSize: "16px", marginLeft: "8px" }}
              >
                Photo/video
              </Typography>
            </IconButton>
            <IconButton
              aria-label="share"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <TagFacesIcon sx={{ color: "red", fontSize: "30px" }} />
              <Typography
                variant="small"
                sx={{ fontSize: "16px", marginLeft: "8px" }}
              >
                Feeling/activity
              </Typography>
            </IconButton>
          </Box>
        </Card>
      </Box>
      {/* add post modal */}
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={3}
        >
          <CloseIcon
            sx={{
              color: "black",
              textAlign: "end",
              width: "100%",
              marginLeft: "45%",
              color: "gray",
            }}
            onClick={(e) => setOpen(false)}
          />

          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "35px", height: "35px" }}
              src={avatar}
              onClick={(e) => setOpen(true)}
            ></Avatar>
            <Typography variant="span" fontWeight={500}>
              Samuel
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            sx={{ width: "100%" }}
            variant="standard"
          />
          <Stack direction={"row"} gap={6} mt={2} mb={3}>
            <CollectionsIcon color="success" />
            <PersonAddAltIcon color="primary" />
            <TagFacesIcon color="success" />
            <LocationOnIcon color="error" />
            <GifBoxIcon color="primary" />
            <MoreHorizIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default AddPost;
