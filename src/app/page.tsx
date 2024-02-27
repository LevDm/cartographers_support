"use client";
import React, { useEffect } from "react";

import {
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Container,
  Paper,
  Divider,
} from "@mui/material";

import CoverBG from "../../public/cover.jpg";
import Image from "next/image";

import { observer } from "mobx-react-lite";

import ExtensionIcon from "@mui/icons-material/Extension";

import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/mobx-store/use-store-provider";
import { format } from "date-fns";

const HomePage = observer(() => {
  const router = useRouter();
  const basepath = usePathname();

  const link = (path: string) => {
    router.push(`${basepath}${path}`);
  };

  const { loadSuccses, lastSave } = useStore();

  return (
    <Box component={"main"}>
      <AppBar position="static">
        <Toolbar>
          <ExtensionIcon />
          <Typography variant="h6" sx={{ marginLeft: 2, flexGrow: 1 }}>
            Главная
          </Typography>
          <Button
            color="inherit"
            sx={{ fontSize: "1.25rem", textTransform: "none" }}
            onClick={() => router.push("//rules")}
          >
            Правила
          </Button>
        </Toolbar>
      </AppBar>

      <Image
        src={CoverBG}
        alt=""
        style={{
          marginTop: "56px",
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          opacity: 0.9,
        }}
        objectFit="cover"
        fill={true}
        placeholder="blur"
      />

      <Container
        component={"section"}
        sx={{
          height: "93vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            padding: 5,
            paddingTop: 3,
            backgroundColor: "rgba(255,255,255,0.76)",
            backdropFilter: "blur(5px)",
            borderRadius: 4,
          }}
        >
          <Stack spacing={2} alignItems={"center"}>
            <Typography variant="h5" fontWeight={"bold"}>
              Запуск
            </Typography>
            <Divider orientation="horizontal" flexItem />

            <Button
              size="large"
              sx={{ textTransform: "none", width: "100%" }}
              onClick={() => link("/action")}
            >
              Новый
            </Button>
            <Button
              size="large"
              sx={{ textTransform: "none" }}
              onClick={() => link("/action/process")}
              disabled={!(loadSuccses.get() && lastSave.get() != null)}
            >
              {lastSave.get()
                ? `${format(lastSave.get() ?? "", "HH:mm / dd.MM")} - продолжить`
                : "Нет сохранений"}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
});
export default HomePage;
