import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { Anchor, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "block",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: { display: "none" },
  }));

  const [open, setOpen] = useState(false);

  return (
    <Stack sx={{ marginBottom: "60px" }}>
      <AppBar position="fixed">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            OMAR SHOKRY
          </Typography>
          <Anchor sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail sx={{ cursor: "pointer" }} />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications sx={{ cursor: "pointer" }} />
            </Badge>
            <Avatar
              onClick={() => setOpen(!open)}
              sx={{ width: 30, height: 30, cursor: "pointer" }}
              src="./imgUser.jpg"
              alt="img-user"
            />
          </Icons>
          <UserBox onClick={() => setOpen(!open)}>
            <Avatar
              sx={{ width: 30, height: 30, margin: "0 auto" }}
              src="./imgUser.jpg"
              alt="img-user"
            />
            <Typography sx={{ fontSize: "12px" }}>Omar Shokry</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          onClose={() => setOpen(false)}
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Mu account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Stack>
  );
}
