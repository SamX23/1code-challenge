import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import imgLogo from "../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box component="footer" py={8} sx={{ bgcolor: "#F3F2EE" }}>
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              h: "100%",
              justifyContent: "space-between",
            }}
          >
            <img src={imgLogo} alt="logo" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                color="text.secondary"
                fontFamily="Times New Roman"
              >
                009-008-0045
              </Typography>
              <Typography
                variant="h6"
                component="h5"
                color="text.secondary"
                fontFamily="Times New Roman"
              >
                www.wazabooking.com
              </Typography>
            </Box>
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
          </Grid>

          <Grid
            item
            md={6}
            height="100%"
            sx={{
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h5"
                fontFamily="Times New Roman"
              >
                Don't want to miss
              </Typography>
              <Typography
                variant="h4"
                component="h5"
                fontFamily="Times New Roman"
              >
                Travel & Tour offers
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                gap: ".5rem",
                mx: "auto",
                mt: "1rem",
                maxWidth: 500,
              }}
            >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                sx={{ width: "100%", bgcolor: "white" }}
              />
              <Button
                variant="contained"
                size="large"
                color="success"
                sx={{ width: "50%" }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            component="ul"
            sx={{ m: 0, listStyle: "none", p: 0 }}
          >
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5">
                Smart Booking
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                Our Story
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                Our Story
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                Photos
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                Review
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                News
              </Typography>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant="h6" component="h5" color="text.secondary">
                Contact
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
