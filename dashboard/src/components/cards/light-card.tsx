import { Box, CardContent, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import EnergyIcon from "@mui/icons-material/FlashOn";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface LightCardProps {
  currentMonthUsage: number;
  lastMonthUsage: number;
}
export function LightCard({
  currentMonthUsage,
  lastMonthUsage,
}: LightCardProps) {
  const usageDifference = currentMonthUsage - lastMonthUsage;
  const isIncreased = usageDifference > 0;
  return (
    <Card>
      <CardContent
        sx={{ padding: 2, margin: 2, backgroundColor: "#E3F2FD" }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <EnergyIcon sx={{ color: "#1E88E5", fontSize: 40 }} />
          <Typography variant="h6" color="textSecondary">
            Consumo de Energia
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
          {currentMonthUsage} kWh
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          {isIncreased ? (
            <ArrowUpwardIcon color="error" />
          ) : (
            <ArrowDownwardIcon color="success" />
          )}
          <Typography color={isIncreased ? "error" : "success"}>
            {Math.abs(usageDifference)} kWh {isIncreased ? "mais" : "menos"} que
            o mês passado
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
