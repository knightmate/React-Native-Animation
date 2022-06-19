
import React, { useEffect, useReducer, useState } from 'react';
import {
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,Animated
} from 'react-native';
 
 
const cardListArr=new Array(5);
//const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

   const SIZE=350;
const CardList=()=>{
    const [movies,setMovies]=useState([])
    const scrollX=React.useRef(new Animated.Value(0));
    useEffect(()=>{

        getMovies().then((movies)=>{
         console.log("DEBUG","-------MOVIES--------",movies);
         setMovies(movies)
        })
     
       },[])
     
    return(
        <View style={{width:SIZE}}> 
        <Animated.FlatList
         horizontal={true}
            onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX.current } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={20}
          snapToAlignment="start"
        renderItem={(item)=>{
            const index=item.index;
            console.log("Item",item)
            const inputRange = [
                (index - 2) * SIZE,
                (index - 1) * SIZE,
                index * SIZE,
              ];
              //inputRange: [index*SIZE-1, index*SIZE, index*SIZE+2],
            const translateY=scrollX.current.interpolate({
                inputRange,
                outputRange: [100, 50 ,100],
                extrapolate: 'clamp',
              })
              console.log("DEBUG",'fdfdfdfd',translateY);
            return <Card item={item} translateY={translateY} ></Card>
        }}
        data={movies}
        snapToInterval={SIZE}
        contentContainerStyle={{alignItems:"center"}}
       
       >
       
        </Animated.FlatList>
    </View>
    )
 
}




const Card=(props )=>{
  
 const {item,translateY}=props;
 const {title,poster}=item.item;
 console.log("DEBUG mees",translateY);
//transform: [{ translateY:transformYP}
 const  transformYP=item.index%2===0?-50:90
    return (
        <Animated.View style={{borderColor:"black",borderWidth:1,width:250 ,transform: [{ translateY:translateY}]
        }}>
                     <Image
                  source={{ uri:  poster }}
                  style={posterImage}
                />
            <Text>{title}</Text>
        </Animated.View>
    )

}


export default CardList;


const API_KEY="61a165cb4b595b07d284dbedb9ee6473"
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
   
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => {
         
      return(
        {
         key: String(id),
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
     // genres: genre_ids.map((genre) => genres[genre]),
        }
      )
    }
  );
  
  return movies;
};

const   posterImage= {
    width: '100%',
    height:SIZE*1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  }