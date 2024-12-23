/**
 * AppBar Component
 * - Displays the header section of the application.
 */
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { AppBarProps } from "./AppBar.types";

const AppBar: React.FC<AppBarProps> = ({ ...props }) => {
  return (
    <MuiAppBar position="static" sx={{ flexShrink: 0, ...props.sx }}>
      <Toolbar>
        <Typography variant="h6">I am header</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
