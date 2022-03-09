import {Button, TextField, Grid, Avatar} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";

export default function Signup() {
    const paperStyle = {
        height: "50vh",
        margin: "20px auto"
    }

    return (
        <>
            <Grid container>
                <div style={paperStyle}>
                    <h2>E-Register</h2>
                    <Grid align="center">
                        <Avatar style={{backgroundColor:"blue"}}><LockOutlined/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextField variant={"standard"} label="Name" placeholder={"Enter Name"} fullWidth required/>
                    <TextField variant={"standard"} label="Email" placeholder={"Enter Email"} fullWidth required/>
                    <TextField variant={"standard"} label="Password" placeholder={"Enter Password"} fullWidth required/>
                    <br/>
                    <br/>
                    <Button variant={"contained"} color={"primary"} fullWidth>
                        Log in
                    </Button>
                </div>
            </Grid>
        </>
    );
}
