import {useNavigate} from "react-router-dom";
import {Button, Grid, Paper, Stack} from "@mui/material";
import {Component} from "react";
import {PATH} from "../../../constant/RoutingPath";
import SingleRegisterView from "./SingleRegisterView";
import Typography from '@mui/material/Typography';
import {blue, lightBlue} from "@mui/material/colors";
import { positions } from '@mui/system';

const RegisterListView = () => {
    const history = useNavigate()

    const topbar = {
        bgcolor: lightBlue,
        color: blue
    }

    const registers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (<Stack spacing={2}>
        <Paper>
            <Stack spacing={2} direction={'row'}>
                <h3>Registers</h3>
                <Button onClick={() => history(PATH.CREATE)} style={{alignItems: "end", backgroundColor: "brown"}} >Create</Button>
            </Stack>
        </Paper>

        <Grid container spacing={2}>
            {registers.map((value, index) => {
                return <Grid key={index} item xs={4} md={3}>
                    <SingleRegisterView/>
                </Grid>
            })}

        </Grid>
    </Stack>)
}

export default RegisterListView