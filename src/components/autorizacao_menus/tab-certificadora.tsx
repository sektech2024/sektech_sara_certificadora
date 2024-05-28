"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const TabCertificadora = () => {
  const menusAtivos = ["lista propriedade", "usuário"];
  const menusInativos = ["permissão", "relatórios"];

  const [activeMenus, setActiveMenus] = useState({
    ativos: menusAtivos,
    inativos: menusInativos,
  });

  const transferirMenu = (menu, origem, destino) => {
    const origemMenus = [...activeMenus[origem]];
    const destinoMenus = [...activeMenus[destino]];

    const index = origemMenus.indexOf(menu);
    if (index !== -1) {
      origemMenus.splice(index, 1);
      destinoMenus.push(menu);
    }

    setActiveMenus({
      ...activeMenus,
      [origem]: origemMenus,
      [destino]: destinoMenus,
    });
  };

  const handleSalvar = () => {
    // Lógica para salvar os menus
    console.log("Menus salvos!");
  };

  return (
    <Card sx={{ marginBottom: 2, width: "100%", minWidth: 1000 }}>
      <CardContent>
        <div>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Gerenciamento de Menus
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card sx={{ bgcolor: "#699934" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: "white" }}>
                    Menus Ativos
                  </Typography>
                  <List sx={{ color: "white" }}>
                    {activeMenus.ativos.map((menu) => (
                      <ListItem key={menu}>
                        <ListItemText
                          primary={menu}
                          primaryTypographyProps={{
                            fontSize: 20,
                          }}
                        />
                        <Button
                          sx={{fontSize: 22}}
                          onClick={() =>
                            transferirMenu(menu, "ativos", "inativos")
                          }
                        >
                          ➡️
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card sx={{ bgcolor: "#be2929" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ color: "white" }}>
                    Menus Inativos
                  </Typography>
                  <List sx={{ color: "white" }}>
                    {activeMenus.inativos.map((menu) => (
                      <ListItem key={menu}>
                        <ListItemText
                          primary={menu}
                          primaryTypographyProps={{
                            fontSize: 20,
                          }}
                        />
                        <Button
                          sx={{fontSize: 22}}
                          onClick={() =>
                            transferirMenu(menu, "inativos", "ativos")
                          }
                        >
                          ⬅️
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            color="success"
            size="large"
            onClick={handleSalvar}
            endIcon={<SaveIcon />}
            sx={{ marginTop: 5, fontWeight: "bold" }}
          >
            Salvar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TabCertificadora;