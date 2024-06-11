import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CircleIcon from "@mui/icons-material/Circle";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { useCharacters } from "../hooks/useCharacters";

export const CardPerson = () => {
  // Desestructuro llamo a las prop
  const { person, handleDecrement, handleIncrement, counter } = useCharacters();

  return (
    <>
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage:
            "url(https://www.todofondos.net/wp-content/uploads/mas-de-76-fondos-de-pantalla-de-space-stars.-fondo-para-computadora-de-estrellas-768x480.jpg)",
          height: "100vh",
        }}
      >
        {/* 1.Titulo de la APP  */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            color: "blue",
            // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
          }}
        >
          Rick and Morty
        </Typography>

        {/* 2. Tarjeta del personaje */}
        <Card
          sx={{
            width: "450px",
            border: "8px solid blue",
            borderRadius: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          {/* Nro. del personaje  */}
          <CardActions
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Box
       
              sx={{
                border: "2px solid blue",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                fontWeight: "bold",
                }}
            >
              <Typography variant="h6">
              Personaje: {person?.id}
              </Typography>
              
            </Box>
          </CardActions>

          {/* Imagen del personaje */}
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <CardMedia
              component="img"
              sx={{
                height: "50%",
                width: "80%",
                borderRadius: "8px"
              }}
              image={person?.image}
              alt={person.name}
            />
          </Box>

          {/* 3. Contenido del personajes  */}
          <CardContent sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <Typography variant="h6" gutterBottom>
              Nombre: {person?.name}
            </Typography>
            <Typography variant="h6">
              Genero:
              {person?.gender === "Male" ? (
                <>
                  {" "}
                  Male <MaleIcon sx={{ color: "blue" }} />{" "}
                </>
              ) : person?.gender === "Female" ? (
                <>
                  {" "}
                  Female <FemaleIcon sx={{ color: "#BE25BB" }} />{" "}
                </>
              ) : (
                <>
                  {" "}
                  unknown <TransgenderIcon />{" "}
                </>
              )}
            </Typography>
            <Typography variant="h6">Especie: {person?.species}</Typography>
            <Typography variant="h6">
              Estado:
              {person?.status === "Dead" ? (
                <>
                  {" "}
                  Dead <CircleIcon sx={{ color: "red" }} />{" "}
                </>
              ) : person?.status === "Alive" ? (
                <>
                  {" "}
                  Alive <CircleIcon sx={{ color: "green" }} />{" "}
                </>
              ) : (
                <>
                  {" "}
                  unknown <CircleIcon />{" "}
                </>
              )}
            </Typography>
            <Typography variant="h6">
              Ubicacion: {person?.location?.name}
            </Typography>
          </CardContent>

          {/* 4. Botones para siguiente y anterior */}
          <CardActions
            sx={{
              justifyContent: "center",
              padding: "0 1rem 1rem",
            }}
          >
            {
              <Button
                variant="contained"
                color="primary"
                onClick={handleDecrement}
                disabled={counter === 1}
                sx={{
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Anterior
              </Button>
            }
            <Button
              onClick={handleIncrement}
              variant="contained"
              color="primary"
              disabled={counter === 20}
              sx={{
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Siguiente
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
