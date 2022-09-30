import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ display: "flex", bgcolor: "background.paper", py: 6 }}
    >
      <div>
        <img src="#" alt="" />
        <div>
          <span>009-008-0045</span>
          <span>www.wazabooking.com</span>
        </div>
        <div>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
      <div>footer</div>
      <div>footer</div>
    </Box>
  );
};

export default Footer;
