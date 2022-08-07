import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import {} from "@mui/material/";

function Header() {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography>Libreria El Virrey</Typography>
          <Button color="secondary">Inicio</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
