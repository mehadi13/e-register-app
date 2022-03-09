import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";
import {Grid, Paper} from "@mui/material";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function Auth() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 350,
        margin: "50px auto"
    }

    return (
        <Grid container spacing={5} align="center">
            <Paper  elevation={10} style={paperStyle}>
            <Box sx={{width: '100%'}}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="Sign In" {...a11yProps(0)} />
                    <Tab label="Sign Up" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Signin/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Signup/>
                </TabPanel>
            </Box>
            </Paper>
        </Grid>
    );
}
