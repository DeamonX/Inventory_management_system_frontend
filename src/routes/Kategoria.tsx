import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useLoaderData } from "react-router";
import { createCategory } from "../backend/Api";
import { CategoryInterface, createCategoryInterface } from "../models/entities";

const Kategoria = () => {
  const [kategoriak, setKategoriak] = useState<CategoryInterface[]>(
    useLoaderData() as CategoryInterface[]
  );
  const [ujKategoria, setUjKategoria] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleNewCategoryChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUjKategoria(e.target.value as string);
  };
  const handleCreateNewCategory = async () => {
    let kategoria = {
      name: ujKategoria,
    } as createCategoryInterface;
    const res = createCategory(kategoria);

    console.log(res);
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <>
          <Box
            sx={{
              width: "fit-content",
              bgcolor: "#888",
              m: "auto",
              mt: 50,
              p: 3,
              borderRadius: 5,
            }}
            component={"form"}
          >
            <Typography sx={{ textAlign: "left", mb: 5, fontSize: 20 }}>
              Új kategória létrehozása
            </Typography>
            <TextField
              onChange={handleNewCategoryChange}
              sx={{
                "& label.Mui-focused": {
                  color: "black",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
              required
              variant="standard"
              label="Kategória neve"
              defaultValue="Új Kategória"
            />
            <Button
              sx={{
                display: "flex",
                m: "auto",
                mt: 5,
                textAlign: "left",
                backgroundColor: "#666",
                color: "#000",
                "&:hover": {
                  bgcolor: "#999",
                },
              }}
              variant="contained"
              onClick={() => {
                handleCreateNewCategory();
              }}
            >
              Létrehozás
            </Button>
          </Box>
        </>
      </Modal>
      <Box
        sx={{
          m: "auto",
          mt: 5,
          p: 3,
          borderRadius: 5,
          textAlign: "center",
          width: "70%",
          height: "fit-content",
          backgroundColor: "#999",
        }}
      >
        <Button
          sx={{
            float: "right",
            backgroundColor: "#888",
            color: "#000",
            "&:hover": {
              bgcolor: "#999",
            },
          }}
          variant="contained"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Új kategória létrehozása
        </Button>
      </Box>
    </>
  );
};
export default Kategoria;
