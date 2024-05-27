'use client'

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
    <Card sx={{ marginBottom: 2, width: "100%"}}>
      <CardContent>
        <div>
          <Typography variant="h4" gutterBottom>
            Gerenciamento de Menus
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Menus Ativos</Typography>
                  <List>
                    {activeMenus.ativos.map((menu) => (
                      <ListItem key={menu}>
                        <ListItemText primary={menu} />
                        <Button
                          size="large"
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
              <Card>
                <CardContent>
                  <Typography variant="h5">Menus Inativos</Typography>
                  <List>
                    {activeMenus.inativos.map((menu) => (
                      <ListItem key={menu}>
                        <ListItemText primary={menu} />
                        <Button
                          size="large"
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
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSalvar}
          >
            Salvar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TabCertificadora;