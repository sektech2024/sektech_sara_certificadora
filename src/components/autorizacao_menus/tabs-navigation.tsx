import React, { Suspense } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const TabCertificadora = React.lazy(
  () => import("@/components/autorizacao_menus/tab-certificadora")
);

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
                sx={{ border: 1, marginLeft: 15 }}
              >
                <Tab
                  label="Certificadora"
                  icon={<WorkspacePremiumOutlinedIcon />}
                  iconPosition="start"
                  {...a11yProps(0)}
                />
                <Tab label="Produtor" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
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
                <Suspense fallback={<div>Carregando...</div>}>
                  <TabCertificadora />
                </Suspense>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Suspense fallback={<div>Carregando...</div>}>
                  <h1>Produtor</h1>
                </Suspense>
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