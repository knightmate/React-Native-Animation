
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

  const c="10%";
  const y="20%";
  const radius="700";
  const color="white"
  const stroke="red"
  const strokeWidth=9;
  const speed=20000;
const circumference=2*Math.PI*radius;
const halfCircle=radius+strokeWidth;
const  [percent,setPercent]=useState(1);

useEffect(()=>{
  let id;
// setInterval(()=>{
//  id=setPercent((pre)=>{
//   if(pre==10)return 1;
//   return pre+1;
// })
// },speed)

return ()=>{
clearInterval(id);
}
},[])
  return(
    <View style={{borderWidth:2,borderColor:'black',width:"100%",height:"100%"}}>
      
     <Svg height={radius*2} width={radius*2} viewBox={`0 0  ${halfCircle*2} ${halfCircle*2}` } >
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={color}
            strokeOpacity="0.2"
          />
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference/3}
          />

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