import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from './data'
import tick from './assets/tick.png'
import cross from './assets/cross.png'


const Card = ({card}) =>{
  return (

    <View style={[styles.card,{backgroundColor:card.color}]}>
    <Text style={styles.text}>{card.id}</Text>
  </View>
    );
}

export default function App() {
  const [index,setIndex] = useState(0);
  const onSwiped = ()=>{
    setIndex((index + 1)%data.length);
  }

  return (
    <View style={styles.container}>
      <Swiper
            cards={data}
            renderCard={data => <Card card={data} />}
            onSwiped={onSwiped}
            // onSwipedAll={() => {
            //   console.log("All card swiped")
            // }}
            cardIndex={index}
            backgroundColor={'white'}
            stackSize= {4}
            stackScale={2}
            stackSeparation={8}
            disableTopSwipe
            infinite
            disableBottomSwipe
            animateOverlayLabelsOpacity
            overlayLabels={{
              left: {
                element: <Image style={styles.cardImage} source={cross} />,
                title: 'NOPE',
                style:{
                  label:{
                    backgroundColor:"red",
                    color:"white",
                    fontSize:24
                  },
                  wrapper:{
                    flexDirection:'column',
                    alignItems:'flex-end',
                    justifyContent:'flex-start',
                    marginTop:20,
                    marginLeft:-20
                  }
                }
              },
              right: {
                element: <Image style={styles.cardImage} source={tick} />,
                title:'LIKE',
                style: {
                  label: {
                    backgroundColor:"blue",
                    color:"white",
                    fontSize:24
                  },
                  wrapper: {
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'flex-start',
                    marginTop:20,
                    marginLeft:20
                  }
                }
              }
            }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  card: {
    flex: 0.80,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: data.color
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  cardImage:{
    width: 120,
    height:120,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginTop:20,
    marginLeft:20
  }
});
