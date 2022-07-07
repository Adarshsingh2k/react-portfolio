import React from 'react'
import { Container } from '@mui/material'
import './header.css'
import { Box } from '@mui/system'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TypoGraphy from '@mui/material/Typography';

const Header = () => {
  return (
    <>
       <Box>
        {/* <AppBar  style={{ background: '#512da8' }} position='static'>
            <Toolbar>
                <TypoGraphy variant='title' color='inherit'>
                    MyHeader
                    </TypoGraphy>

            </Toolbar>
        </AppBar> */}

        <Container maxWidth='sm' sx={{border: '3px solid #e91e63', marginTop:'2%'}} className='parentDiv'>
            xfhfxch
        </Container>
       </Box>
    </>
    
  )
}

export default Header