/**
 * Footer Component
 * - Displays the footer section of the application.
 */
import { Box, Typography } from "@mui/material";
import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        flexShrink: 0,
        height: "50px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "15px",
        ...props.sx,
      }}
    >
      <Typography variant="body2">I am footer</Typography>
    </Box>
  );
};

export default Footer;
