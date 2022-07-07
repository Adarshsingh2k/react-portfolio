import React from 'react'
import { Container } from '@mui/material'
import './header.css'
import { Box } from '@mui/system'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useState } from 'react';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const Project = () => {
    let[title, setTitle] = useState()
    let[image, setImage] = useState()
    let[repos, setRepos] = useState()
               
    const githubCard = ()=>{
    //    fetch('https://api.github.com/users/Adarshsingh2k/repos')
    fetch('https://api.github.com/users/Adarshsingh2k')
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setImage(data.avatar_url)
            setTitle(data.login)
            setRepos(data.public_repos)
            // setTitle(title=data.map(item=>item.name))
            //     Title=data.map((item)=>{
            //     return item.name
            // })
            console.log(title)
        }
    )
     
    //   console.log(out.response());
    }

    const gitCommits=()=>{
        // fetch("https://api.github.com/users/Adarshsingh2k/repos?per_page=100")
        const date = new Date();
        console.log(date)

        fetch("https://api.github.com/repos/Adarshsingh2k/30-Days-Of-Code/commits?")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

   
  return (
    <> {githubCard()}
       <Box>
        {/* <AppBar  style={{ background: '#512da8' }} position='static'>
            <Toolbar>
                <TypoGraphy variant='title' color='inherit'>
                    MyHeader
                    </TypoGraphy>

            </Toolbar>
        </AppBar> */}

        <Container maxWidth='sm' sx={{border: '3px solid #e91e63', marginTop:'2%'}} className='parentDiv'>
            <button type='button' onClick={gitCommits}>hit</button>
          
            
            <Card sx={{ display: 'flex', gap:5 }}>
            <CardMedia
                component="img"
                sx={{ width: 170 }}
                image={image}
                alt="UserImage"
            />
            <Box sx={{display: 'flex',flexDirection:'column'}}>
                
                <Typography component="div" variant="h5" sx={{display:'flex',flexDirection:'row', gap: 3}}>
                    <CardMedia component="img" sx={{width:70, height:70,marginTop:1}}  
                    image="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
                    <h5>{title}</h5>
                </Typography>

                <Typography component="div" variant="h5" sx={{display:'flex',flexDirection:'row', gap: 3}}>
                    <CardMedia component="img" sx={{width:40, height:40,marginTop:1}}  
                    image="https://img.icons8.com/doodle/2x/repository.png" />
                    <h5>{repos}</h5>
                </Typography>
            </Box>
            
                
            </Card>

        </Container>
       </Box>
    </>
    
  )
}

export default Project