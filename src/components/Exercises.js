import React, {useEffect, useState}  from 'react'
import  Pagination  from '@mui/material/Pagination';
import { Box,Stack,Typography} from '@mui/material/';

import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';



const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setcurrrentPage]= useState(1);
  const exercisesPerPage = 3;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  
  const indexofLastExercise = currentPage*exercisesPerPage;
  const indexofFirstExercise = indexofLastExercise-exercisesPerPage;
  const currentExercises= exercises.slice(indexofFirstExercise,indexofLastExercise);

  const paginate =(e,value) =>{
    setcurrrentPage(value);

    window.scrollTo({ top:1800 , behavior:'smooth'})
  }
  return (
    <Box id="exercises"
     sx={{mt: {lg:'110px'}}}
     mt="50px"
     p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg:'110px', xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
       {currentExercises.map((exercise,idx)=>(
        <ExerciseCard key={idx} exercise={exercise} />
       ))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length >3 && (
          <Pagination 
            color='standard'
            shape='rounded' 
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}

      </Stack>

    </Box>
    
  )
}

export default Exercises
