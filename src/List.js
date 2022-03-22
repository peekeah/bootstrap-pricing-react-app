import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className="container">
      <div className="section">
        <div className="card">
        <Box
          component="div"
          className="box"
          sx={{
            flexGrow: 1,
            maxWidth: 400,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Typography sx={{ mt: 2 }} align="center" color="#696969">
            <strong>FREE</strong>
          </Typography>
          <Typography
            sx={{ mt: 1, mb: 2 }}
            variant="h2"
            align="center"
            component="div"
          >
            $0/<Typography component="span">month</Typography>
          </Typography>
          <Divider sx={{ mt: 2, mb: 1 }}></Divider>
          <Demo>
            <List dense={dense}>
              <div className="list">
                <Typography varient="h3" component="p">
                  <DoneIcon />
                  Single User
                </Typography>

                <Typography varient="h3" component="p">
                  <DoneIcon />
                  5GB Storage
                </Typography>

                <Typography varient="h3" component="p">
                  <DoneIcon />
                  Unlimited Public Projects
                </Typography>

                <Typography varient="h3" component="p">
                  <DoneIcon />
                  Community Access
                </Typography>

                <Typography varient="h3" component="p">
                  <CloseIcon />
                  Unlimited Private Projects
                </Typography>

                <Typography varient="h3" component="p">
                  <CloseIcon />
                  Dedicated Phone Support
                </Typography>

                <Typography varient="h3" component="p">
                  <CloseIcon />
                  <span>Free Subdomain</span>
                </Typography>

                <Typography varient="h3" component="p">
                  <CloseIcon />
                  Monthly Status Reports
                </Typography>
                <div className="button-click">
                  <Button
                    component="button"
                    size="large"
                    variant="contained"
                    align="center"
                    sx={{borderRadius: 5}}
                    fullWidth="true"
                  >
                    Button
                  </Button>
                </div>
              </div>
            </List>
          </Demo>
        </Box>
        </div>
        <div className="card"> 
          <Box
            component="div"
            className="box"
            sx={{
              flexGrow: 1,
              maxWidth: 400,
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ mt: 2 }} align="center" color="#696969">
              <strong>PLUS</strong>
            </Typography>
            <Typography
              sx={{ mt: 1, mb: 2 }}
              variant="h2"
              align="center"
              component="div"
            >
              $9/<Typography component="span">month</Typography>
            </Typography>
            <Divider sx={{ mt: 2, mb: 1 }}></Divider>
            <Demo>
              <List dense={dense}>
                <div className="list">
                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    <strong>5 Users</strong>
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    5GB Storage
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Unlimited Public Projects
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Community Access
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Unlimited Private Projects
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Dedicated Phone Support
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    <span>Free Subdomain</span>
                  </Typography>

                  <Typography varient="h3" component="p">
                    <CloseIcon />
                    Monthly Status Reports
                  </Typography>
                  <div className="button-click">
                    <Button
                      component="div"
                      size="large"
                      variant="contained"
                      align="center"
                      sx={{borderRadius: 5}}
                      fullWidth="true"
                    >
                      Button
                    </Button>
                  </div>
                </div>
              </List>
            </Demo>
          </Box>  
        </div>

        <div className="card"> 
          <Box
            component="div"
            className="box"
            sx={{
              flexGrow: 1,
              maxWidth: 400,
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ mt: 2 }} align="center" color="#696969">
              <strong>PRO</strong>
            </Typography>
            <Typography
              sx={{ mt: 1, mb: 2 }}
              variant="h2"
              align="center"
              component="div"
            >
              $49/<Typography component="span">month</Typography>
            </Typography>
            <Divider sx={{ mt: 2, mb: 1 }}></Divider>
            <Demo>
              <List dense={dense}>
                <div className="list">
                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    <strong>Unlimited Users</strong>
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    150GB Storage
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Unlimited Public Projects
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Community Access
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Unlimited Private Projects
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Dedicated Phone Support
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    <span>
                      <strong>Unlimited</strong> Free Subdomain
                    </span>
                  </Typography>

                  <Typography varient="h3" component="p">
                    <DoneIcon />
                    Monthly Status Reports
                  </Typography>
                  <div className="button-click">
                    <Button
                      component="div"
                      size="large"
                      variant="contained"
                      align="center"
                      sx={{borderRadius: 5}}
                      fullWidth="true"
                    >
                      Button
                    </Button>
                  </div>
                </div>
              </List>
            </Demo>
          </Box>
        </div>
      </div>
    </div>
  );
}
