import React, { useState, useEffect } from 'react';
import './App.css';
import ImageUploader from "react-images-upload";
import {
  Button,
  Grid,
  Typography,
  OutlinedInput, Container, IconButton
} from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons";
import ChipPlatform from './chip_platform';


const App = () => {
  //var list =[ 'sad',"Asd","ASd"];
  const [platformInput, setPlatformInput] = useState('');
  const [image, setImages] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [showplatformInput, setShow] = useState(false);
  function onDrop(file, pictures) {

    //setImages(...e);

    console.log(pictures);

    /* this.setState({
       pictures: this.state.pictures.concat(picture),
     });*/
  };
  const onDelete = () => {

  }
  return (

    <div className="App">
      <Container >
        <Typography component='div' style={{ backgroundColor: '#cfe8fc', height: '100%', width: '100%' }} >
          <Grid container direction="row" >
            <Grid item xs={10} alignItems={'center'}>
              <Typography variant="subtitle1" gutterBottom style={{ padding: 20, }}>
                CREATE CHANNEL GAME
                  </Typography>
            </Grid>
            <Grid item xs={2} style={{ padding: 10 }} >
              <Button variant="contained" color="primary" onClick={() => {
                console.log(image);
              }}>CREATE</Button>
            </Grid>
          </Grid>

          <Grid container spacing={4} direction={"row"} style={{ backgroundColor: 'blue', height: '100%', width: '100%' }}>
            <Grid container item xs={8} direction='column'>
              {/* game name */}
              <Grid container spacing={2} direction='row' style={{ marginLeft: 20, alignItems: 'center' }}>
                <Grid item xs={2} >
                  <Typography variant="body1">Name:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <OutlinedInput name='gameName' fullWidth placeholder='Type game name' disableUnderline='true' style={{ textAlign: 'center', height: 35 }} ></OutlinedInput>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems='center' style={{ alignItems: 'center' }}>

                <Grid spacing={2} direction='column' style={{width:'50%'}}>
                  <Grid item xs={2}>
                    <Typography variant="body1">Logo:</Typography>
                  </Grid>
                  {/* upload logo game */}
                  <Grid item xs={4}>

                    <ImageUploader
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                      singleImage={true}
                      withPreview={true}
                    />

                  </Grid>
                </Grid>
                <Grid spacing={2} direction='column' style={{ width: '50%' }} >
                  <Grid item xs={2}>
                    <Typography variant="body1">Images:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <ImageUploader
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}

                      withPreview={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item xs={12} direction='column'>

                <Grid container spacing={2} direction='row' alignItems='center' style={{ marginLeft: 20, marginTop: 10, alignItems: 'center' }}>

                  <Grid container spacing={2} direction='column' >
                    <Grid container spacing={2} direction='row' alignItems='center'>
                      
                     
                    </Grid>
                   

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} direction='column' style={{ backgroundColor: '#6B6B6C' }}>
              <Grid container spacing={2} direction="column" alignItems="center" >
                
                <Grid container spacing={2} direction='row' alignItems='center'>
                  <Typography variant="body1" alignItems='center'>Platform:</Typography>
                  <ChipPlatform list={platformList} />
                </Grid>
                <Grid container spacing={2} direction='row' alignItems='center' style={{ padding: 10 }}>
                  
                  <IconButton onClick={() => {
                    setShow(!showplatformInput);
                    console.log(showplatformInput);
                  }}><Add />
                  </IconButton>
                  <Grid item xs={8} hidden={!showplatformInput}>
                    <OutlinedInput
                      className='input_platform'
                      name='gameName'
                      fullWidth
                      placeholder='type platform'
                      disableUnderline='true'
                      value={platformInput}
                      onChange={(e) => {
                        setPlatformInput(e.currentTarget.value)
                      }}
                      onKeyDown={(e) => {

                        if (e.key == 'Enter' && platformInput != '' && platformInput.indexOf(' ') < 0) {

                          console.log('your input', platformInput);
                          setPlatformList(platformList => [...platformList, platformInput]);
                          setPlatformInput('')
                          console.log(platformList.length);
                          //setPlatformInput('')
                        }
                        else return null;
                      }}


                      style={{ textAlign: 'center', height: 35 }} ></OutlinedInput>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Grid>
        </Typography>

      </Container>

    </div>
  );
}

export default App;
