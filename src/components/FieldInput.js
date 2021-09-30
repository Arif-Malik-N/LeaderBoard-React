import { useState } from "react";
import { Box, Typography, Dialog, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {   handleSubmit  } from '../state/leader/leader-Action'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  main: {
    backgroundColor: "white ",
    position: "absolute",
    marginTop: "40%",
    padding: "2%",
    width: 400,
    height: 400,
  },
}));

const FieldInput = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [player, setPlayer] = useState({
    name: "",
    location: "",
    date: "",
    unit: "",
    type: "",
    points: "",
  });

  const [showAd, setShowAd] = useState(false);

  const closeModal = () => setShowAd(false);

  const uploadData= ( )=>{
    const { name , location, date, points, type, unit}= player
    if( name && location && date && points && type && unit != ''){
      dispatch(handleSubmit(player))
      closeModal()
      // setPlayer({})
    }
    else{
      alert('Insert complete data')
    }

  }
  return (
    <>
      <Dialog open={showAd} onClose={closeModal}>
        <Box width="400px" p={2} textAlign="center">
          <Typography style={{ fontWeight: 700, marginTop: 10 }}>
            Add New Player.
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="dense"
            value={player.name}
            onChange={(e)=>setPlayer({
              ...player,
              name:e.target.value
            })}
          />
          <div style={{ display: "flex",justifyContent:'space-between', width:'98%'}}>
            <TextField
              label="Location"
              variant="outlined"
              margin="dense"
              value={player.location}
              onChange={(e)=>setPlayer({
                ...player,
                location:e.target.value
              })}
            />
            <TextField
              variant='outlined'
              id="date"
              margin="dense"
              label="Date"
              type="date"
              defaultValue="2021-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value={player.date}
              onChange={(e)=>setPlayer({
                ...player,
                date:e.target.value
              })}
            />
          </div>
          <div style={{ display: "flex", justifyContent:'space-between', width:'100%' }}>
            <TextField
            style={{width:'30%'}}
              label="Unit"
              variant="outlined"
              margin="dense"
              value={player.unit}
              onChange={(e)=>setPlayer({
                ...player,
                unit:e.target.value
              })}
            />
            <TextField
            style={{width:'30%'}}
              label="Type"
              variant="outlined"
              margin="dense"
              value={player.type}
              onChange={(e)=>setPlayer({
                ...player,
                type:e.target.value
              })}
            />
            <TextField
            style={{width:'30%'}}
              label="Points"
              variant="outlined"
              margin="dense"
              value={player.points}
              onChange={(e)=>setPlayer({
                ...player,
                points:e.target.value
              })}
            />
           
          </div>

          <Button
          style={{marginTop:'10%'}}
            variant="contained"
            color="primary"
            fullWidth
            onClick={uploadData}
          >
       Save
          </Button>
        </Box>
      </Dialog>
      <div>
          <Button
          style={{backgroundColor:'beige', width:150, height:30, borderRadius:5}}
            onClick={ ()=> setShowAd(true) }>
               Add New Player
               </Button>
        </div>
    </>
  );
};
export default FieldInput;
