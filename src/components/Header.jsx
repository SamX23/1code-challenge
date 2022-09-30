import imgLogo from "../assets/logo.png";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Header() {
  return (
    <Toolbar
      sx={{
        bgColor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
      </Box>
      <Box>
        <img src={imgLogo} alt="logo" />
      </Box>
      <Typography variant="h6" component="span">
        708-508-4500
      </Typography>
    </Toolbar>
  );
}

export default Header;
