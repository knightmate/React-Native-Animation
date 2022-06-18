
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
   
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Animation=()=>{

  const c="50%";
  const y="50%";
  const radius=40;
  const color="white"
  const stroke="red"
  const strokeWidth=10;
  const speed=60;
const circumference=2*Math.PI*radius;
const halfCircle=radius+strokeWidth;
const  [percent,setPercent]=useState(5);




useEffect(()=>{
  let id;
setInterval(()=>{
 id=setPercent((pre)=>{
  if(pre==100){
     clearInterval(id)
    return 1;
  }
  return pre+1;
})
},speed)

return ()=>{
clearInterval(id);
}
},[])
 
    function calPercent(percentNo){
   
      return circumference-(circumference*percentNo)/100;
    }
    // style={{borderColor:"red",borderWidth:1}}
  return(
    <View  style={{width:'100%',borderColor:"black",borderWidth:3,height:"100%",justifyContent:'center',alignItems:'center'}}>
     
     <Svg style={{borderColor:"red",borderWidth:1,position:"relative"}}  height={radius*2} width={radius*2}  viewBox={`0 0  ${halfCircle*2} ${halfCircle*2}`}     >
     <Text style={{position:'absolute',top:30,textAlign:"center",width:"100%"}}>{percent}</Text>
         <G> 
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeOpacity="0.2"
            
          ></Circle>
           
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={calPercent(percent)}
          strokeLinecap="round"
          />
        </G>
          {/* <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          /> */}
        </Svg>
    </View>

)
}
  
  export default Animation;