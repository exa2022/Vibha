import React from 'react';
import {ImageBackground, View, Text, StyleSheet, Pressable} from 'react-native';



const image = { uri: "https://storage.googleapis.com/fundraise.vibha.org/production/system/redactor2_assets/images/9298c535-9721-406f-ac7c-22e071e3fcce/content_15823703463_2a7bc844a5_k.jpg" };

const DFWSCREEN = ({navigation}) => {
    return (
       <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <View style = {styles.overlaycontainer}>
       
                <View style = {styles.container}>
                    <Text style = {styles.Headline}>Welcome to the DFW Main Page!
                    {"\n"}
                    {"\n"}
                    </Text> 
                    <Text style = {styles.Text1}>A brighter future for children!
                    {"\n"}
                    {"\n"}
                    </Text>
                    <Text style = {styles.Text2}>Click HERE for current events details and HERE to visit the external registration page
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    </Text>
                    <Pressable style = {styles.ButtonContainer}>
                        <Text style = {styles.ButtonText}>Share</Text>
                    </Pressable>
                    </View>
            </View>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    Headline: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 120,
        color: '#FFFFE0',
    },
    Text1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'yellow',
        fontStyle: 'italic',
        marginTop: 20,
    },
    Text2: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
    },
    ButtonContainer: {
        backgroundColor: 'orange',
        height: 50,
        width: 170,
        justifyContent: 'center',
        marginHorizontal: 930,
        marginBottom: 230,
        borderColor: 'white',
        borderWidth: 4,
        shadowColor: 'black',
        shadowRadius: 20,
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        
    },
    image: {
         
    },
    overlaycontainer: {
        backgroundColor: 'rgba(47,163,218,.4)',
        
    }
   
  });


  export default DFWSCREEN;
