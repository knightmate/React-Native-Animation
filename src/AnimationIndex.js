
import React from 'react';
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

  const c="50";
  const y="50";
  const radius="25";
  const color="white"
  const stroke="yellow"

  return(
    <View style={{borderWidth:2,borderColor:'black',width:"100%",height:"100%"}}>
      
     <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth="2.5"
            fill={color}
          />
          <Circle
            cx={c}
            cy={y}
            r={radius}
            stroke={stroke}
            strokeWidth="2.5"
            fill={color}
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