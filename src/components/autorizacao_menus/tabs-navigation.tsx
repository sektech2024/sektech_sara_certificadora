import React from "react";
import { Card, CardContent, Divider } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const TabCertificadora = React.lazy(
  () => import("@/components/autorizacao_menus/tab-certificadora")
);

const style = {
  py: 0,
  width: "50%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
  marginLeft: "40%",
  marginTop: 4,
  boxShadow: 1,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TabsPerfis() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid md={4}>
            <Box
              sx={{
                bgcolor: "background.paper",
                display: "flex",
                height: "auto",
                marginTop: 10,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="perfis"
                sx={style}
              >
                <Tab label="Certificadora" {...a11yProps(0)} />
                <Divider variant="middle"/>
                <Tab label="Produtor" {...a11yProps(1)} />
                <Divider variant="middle"/>
                <Tab label="Item Three" {...a11yProps(2)} />
                <Divider variant="middle"/>
                <Tab label="Item Four" {...a11yProps(3)} />
                <Divider variant="middle"/>
                <Tab label="Item Five" {...a11yProps(4)} />
                <Divider variant="middle"/>
                <Tab label="Item Six" {...a11yProps(5)} />
                <Divider variant="middle"/>
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
            </Box>
          </Grid>
          <Grid md={8}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: "auto",
                marginTop: 10,
              }}
            >
              <TabPanel value={value} index={0}>
                <TabCertificadora />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <h1>Produtor</h1>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Usuário Certificadora
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}