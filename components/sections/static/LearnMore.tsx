'use client'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

export default function LearnMore() {
        const [readMoreOpen, setReadMoreOpen] = useState(false)
        const toggleReadMoreParent = () => setReadMoreOpen((prev) => !prev)
  return (
    <Box className="learnMoreOuter">
                        <Typography variant="h2" className="learnMoreTitle">
                            Learn More
                        </Typography>
                        <Box className="learnMoreContent">
                            <Typography variant="body1" className={`learnMoreContentText ${readMoreOpen ? "readMoreOpen" : ""}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </Typography>
                        </Box>
                        <Box className="learnMoreButton">
                            <Button variant="contained" onClick={toggleReadMoreParent}>{readMoreOpen ? "See Less" : "See More"}</Button>
                        </Box>
                    </Box>
  )
}
