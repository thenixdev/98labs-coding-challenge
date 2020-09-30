import {
  Grid,
  Select,
  TextField,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import React from "react";


const pattern = []
function Xyzcomponent(props) {
    const [letters, setLetters] = React.useState([]);
    const [lettersLength, setLettersLength] = React.useState([]);
    const [patterDirection, setPatternDirection] = React.useState('row');
    const [size, setSize] = React.useState(0);
   

    const [lettersArr, setLettersArr] = React.useState([])
    const [lettersCount, setLettersCount] = React.useState()
    const [pattern, setPattern] = React.useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        
        if(name === 'size'){
            if(value != '') {
                setSize(parseInt(value))
            }
        }else if(name === 'letters'){
            if(value != '') {
                setLetters(prevState => [...prevState,  value])
            }
        }

        setLettersLength(parseInt(letters.length))
    }

    React.useEffect(() => {
        setLettersArr(String(letters[lettersLength]).replace(/ /g,'').replace(/[A-Wa-w]/g,'').split(''))
        setLettersCount(lettersArr.length + 1)

        let arr = new Array(parseInt(size)).fill(1).map(row => new Array(parseInt(size)).fill('O'))
        setPattern(arr)
        console.log(arr)
    }, [letters, size])
    console.log(lettersArr)
  return (
    <React.Fragment>
      <Grid container>
        <Grid item sm={3} />
        <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12} lg={12}>
                <Box display="flex" justifyContent="left">
                  <TextField label="Letters" name='letters' onChange={(e) => handleChange(e)}/>
                </Box>
              </Grid>
              <Grid item  xs={12} lg={12}>
                <Box display="flex" justifyContent="left">
                  <TextField label="Size" name='size' onChange={(e) => handleChange(e)} type='number' />
                </Box>
              </Grid>
              <Grid item  xs={12} lg={12}>
                <Box display="flex" justifyContent="left">
                <FormControl style={{minWidth: 200}}>
                  <InputLabel id="direction">Direction</InputLabel>
                  <Select value={patterDirection} labelId="direction" id="demo-simple-select" onChange={(e) => setPatternDirection(e.target.value)}>
                    <MenuItem value="row">Horizontal</MenuItem>
                    <MenuItem value="column">Vertical</MenuItem>
                  </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid container direction={patterDirection} xs={12} spacing={3} style={{marginTop: '5%'}}>
                {lettersArr.map(letter =>
                    <Grid item xs={2}>{letter}</Grid>
                )}
                {pattern.map(patt =>
                    <Grid item xs={2}>{patt}</Grid>
                )}
              </Grid>
            </Grid>          
        </Grid>
        <Grid item sm={3} />
      </Grid>
    </React.Fragment>
  );
}

export default Xyzcomponent;
