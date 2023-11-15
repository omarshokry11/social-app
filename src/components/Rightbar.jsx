import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Conversations from "./Conversations";

export default function Rightbar() {
  return (
    <Box
      alignItems="center"
      flex={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width={{ xs: 0, sm: 230, xl: 300 }} marginTop={5}>
        <Typography mb={2} variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{ marginBottom: 5 }}>
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
          <Avatar src="./imgUser.jpg" alt="img-user" />
        </AvatarGroup>
        <Typography mb={2} variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList sx={{ marginBottom: 5 }} cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
          <ImageListItem>
            <img src="./imgUser.jpg" alt="img-user" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <Conversations />
      </Box>
    </Box>
  );
}
