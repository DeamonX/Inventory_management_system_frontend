import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { noItemLink } from "../styles/raktarStyle";

const Utanrendeles = () => {
  const kategoria = useLoaderData();
  return (
    <>
      {kategoria ? (
        <>
          <Box
            sx={{
              m: "auto",
              mt: 5,
              p: 3,
              borderRadius: 5,
              textAlign: "center",
              width: "fit-content",
              height: "fit-content",
              backgroundColor: "#999",
            }}
          >
            <Link style={noItemLink} to="/kategoria">
              Nincs az adatbázisban kategória! Hozz létre egyet itt!
            </Link>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ textAlign: "center", mt: 2, fontSize: 30 }}>
            Utánrendelés
          </Typography>
          <Box
            sx={{
              p: 3,
              m: "auto",
              mt: 5,
              borderRadius: 5,
              textAlign: "center",
              width: "60%",
              height: 100,
              backgroundColor: "#999",
            }}
          ></Box>
        </>
      )}
    </>
  );
};

export default Utanrendeles;
