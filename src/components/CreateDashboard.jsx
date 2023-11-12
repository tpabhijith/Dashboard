// 'use client'
import { Box, Button, TextField, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import React, { useState } from "react";
import {usePostStore} from '../store/Posts'

const CreateDashboard = ({addModal,setAddModal}) => {
  const [name, setName] = useState("");
  const [color,setMainColor]=useState('#fff')
  const [secColor,setSecColor]=useState('#fff')
  const addPost = usePostStore((state)=>state.addPost)
  const dashboards = usePostStore((state)=>state.dashboards)
  const handleChange = (newValue) => {
    setMainColor(newValue);
  };
  const handleSecChange = (newValue) => {
    setSecColor(newValue);
  };
  const handleSubmit = () => {
    addPost({id:dashboards.length + 1,name:name,tittle:'',dashboard_settings:{primary_color:color,secondary_color:secColor}})
    setAddModal(false)
  }
  return (
    <Box
      sx={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#00000070",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform:addModal ? 'scale(1,1)' : 'scale(0,0)'
      }}
    >
      <Box
        sx={{
          width: "40%",
          height: "400px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: 5,
        }}
      >
        <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
          Add Dashboard
        </Typography>
        <Box>
          <TextField
            value={name}
            label="name"
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            variant="standard"
            sx={{ fontSize: "30px", width: "100%" }}
          />
           <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                marginTop:'10px'
              }}
            >
              <Typography>Primary color: </Typography>
              <MuiColorInput value={color} onChange={handleChange} />
            </Box>
           <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                marginTop:'10px'
              }}
            >
              <Typography>Secondary color: </Typography>
              <MuiColorInput value={secColor} onChange={handleSecChange} />
            </Box>
        </Box>
        <Button variant="contained" sx={{backgroundColor:'blue',color:'#000'}} onClick={()=>{handleSubmit()}}>Contained</Button>
      </Box>
    </Box>
  );
};

export default CreateDashboard;
