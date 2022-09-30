import { Box, IconButton, Typography } from "@mui/material";
import imgLogo from "../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ display: "flex", bgColor: "secondary", py: 6 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img src={imgLogo} alt="logo" />
        <div>
          <Typography variant="h6" component="h5" color="text.secondary">
            009-008-0045
          </Typography>
          <Typography variant="h6" component="h5" color="text.secondary">
            www.wazabooking.com
          </Typography>
        </div>
        <div>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </div>
      </Box>
      <Box
        sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h5" component="h5">
          Don't want to miss
        </Typography>
        <Typography variant="h5" component="h5">
          Travel & Tour offers
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ul>
          <li>
            <Typography variant="h6" component="h5">
              Smart Booking
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="h5" color="text.secondary">
              Our Story
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="h5" color="text.secondary">
              Our Story
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="h5" color="text.secondary">
              Our Story
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="h5" color="text.secondary">
              Our Story
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="h5" color="text.secondary">
              Our Story
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Footer;
