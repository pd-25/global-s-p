'use client'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
export default function RelatedKeywords() {
    const [readMoreOpenKeywords, setReadMoreOpenKeywords] = useState(false)
    const toggleReadMoreKeywords = () => setReadMoreOpenKeywords((prev) => !prev)
    return (
        <Box className="relatedKeyWordsOuter">
            <Typography variant="h2" className="relatedKeyWordsTitle">
                Related Keywords
            </Typography>
            <Box className={`relatedKeyWordsContent ${readMoreOpenKeywords ? "readMoreOpenKeywords" : ""}`}>
                <Box className="relatedKeyWordsContentList">
                    <Button variant="outlined">prefabricated houses</Button>
                    <Button variant="outlined">lingerie</Button>
                    <Button variant="outlined">food wholesalers drinks</Button>
                    <Button variant="outlined">asbestos removal contractors</Button>
                    <Button variant="outlined">foöd importer</Button>
                    <Button variant="outlined">solar panel</Button>
                    <Button variant="outlined">furniture wholesaler</Button>
                    <Button variant="outlined">food packaging distributors</Button>
                    <Button variant="outlined">prefabricated houses</Button>
                    <Button variant="outlined">lingerie</Button>
                    <Button variant="outlined">food wholesalers drinks</Button>
                    <Button variant="outlined">asbestos removal contractors</Button>
                    <Button variant="outlined">foöd importer</Button>
                    <Button variant="outlined">solar panel</Button>
                    <Button variant="outlined">furniture wholesaler</Button>
                    <Button variant="outlined">food packaging distributors</Button>
                    <Button variant="outlined">prefabricated houses</Button>
                    <Button variant="outlined">lingerie</Button>
                    <Button variant="outlined">food wholesalers drinks</Button>
                    <Button variant="outlined">asbestos removal contractors</Button>
                    <Button variant="outlined">foöd importer</Button>
                    <Button variant="outlined">solar panel</Button>
                    <Button variant="outlined">furniture wholesaler</Button>
                    <Button variant="outlined">food packaging distributors</Button>
                    <Button variant="outlined">prefabricated houses</Button>
                    <Button variant="outlined">lingerie</Button>
                    <Button variant="outlined">food wholesalers drinks</Button>
                    <Button variant="outlined">asbestos removal contractors</Button>
                    <Button variant="outlined">foöd importer</Button>
                    <Button variant="outlined">solar panel</Button>
                    <Button variant="outlined">furniture wholesaler</Button>
                    <Button variant="outlined">food packaging distributors</Button>
                    <Button variant="outlined">prefabricated houses</Button>
                    <Button variant="outlined">lingerie</Button>
                    <Button variant="outlined">food wholesalers drinks</Button>
                    <Button variant="outlined">asbestos removal contractors</Button>
                    <Button variant="outlined">foöd importer</Button>
                    <Button variant="outlined">solar panel</Button>
                    <Button variant="outlined">furniture wholesaler</Button>
                    <Button variant="outlined">food packaging distributors</Button>
                </Box>
            </Box>
            <Box className="learnMoreButton">
                <Button variant="contained" onClick={toggleReadMoreKeywords}>{readMoreOpenKeywords ? "See Less" : "See More"}</Button>
            </Box>
        </Box>
    )
}
