
import { Box } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <Box
        component="img"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover"
        }}
        alt="The house from the offer."
        src="https://assets.materialup.com/uploads/480d36a3-b732-494e-b92a-42c82e69a653/preview.jpg"
      />
    </div>
  )
}

export default NotFound