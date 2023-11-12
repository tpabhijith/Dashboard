import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardHeader = ({dashData}) => {
  return (
    <Box sx={{width:'100%',height:'80px',backgroundColor:`${dashData?.dashboard_settings?.primary_color}`}}>
        <Box sx={{width:'90%',margin:'0 auto',height:'100%',display:'flex',alignItems:'center'}}>
            <Typography sx={{fontSize:'30px'}}>{dashData.name}</Typography>
        </Box>
    </Box>
  )
}

export default DashboardHeader