import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import VisaoGeral from "../../assets/images/visao-geral.png";
interface HeroCardProps {
  user: string;
}
export function HeroCard({ user }: HeroCardProps) {
  return (
    <Card sx={{ backgroundColor: "#fff3e0" }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <Box>
            <Typography variant="h6" >Bem vindo de volta, {user}!</Typography>
            <Typography variant="body1">
              Confira as informações de gastos da sua casa
            </Typography>
          </Box>
        <img src={VisaoGeral} alt="visao-geral" height={120} />
        </Box>
      </CardContent>
    </Card>
  );
}
