import { Audio } from "expo-av";
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import music from './assets/SeinfeldTheme.mp3'


class Sound extends React.Component {

   

   async handlePress() {
     try {
        const { sound: soundObject, status } = await 
           Audio.Sound.createAsync(music, { shouldPlay: true });
        await soundObject.playAsync();
        } catch (error) { console.log(error); }
    }

    render() {
        return (
            <View>
                <Button color="#ff5c5c" title="Play Seinfeld" onPress={this.handlePress.bind(this)}></Button>
            </View>
        )
    }
}
export default Sound;