
import React,{ useEffect , useState}  from 'react';
import { Text, View } from 'react-native';
import styles from './Parcours.styles';
import { Button } from 'react-native-elements';
import Courses from '../../components/Courses.js';
import SimpleMap from './test'




export default function Parcours() {
  const[parcours, setParcours] = useState(undefined);
  


  return (

  
    <Courses/>

   );
  }