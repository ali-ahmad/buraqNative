import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import SoundPlayer from 'react-native-sound';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {COLORS, SIZES} from '../constants';

import {useAudioHelper} from '../Services/services';

const Playlist = () => {
  
    const player = useAudioHelper({
   
    listSounds: [
      {
        type: 'app-bundle',
        path: 'terebina.mp3',
        name: 'Blue Dream - Cheel',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        type: 'app-bundle',
        path: 'humnawa.mp3',
        name: 'Know Myself - Patrick Patrikios',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      // { type: 'network', path: 'https://raw.githubusercontent.com/uit2712/RNPlaySound/develop/sounds/Tropic%20-%20Anno%20Domini%20Beats.mp3', name: 'Tropic - Anno Domini Beats', },
    ],
    timeRate: 15,
    isLogStatus: true,
  
  });

  return (
    <View style={{backgroundColor: COLORS.primary}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * -1,
          marginLeft: SIZES.padding * -15,
          width: 330,
        }}>
        <Text style={styles.progressBarText}>{player.currentTimeString}</Text>
        <Slider
          style={{width: '70%', height: 40, borderBottomColor:COLORS.black, borderWidth:3}}
          minimumValue={0}
          maximumValue={player.duration}
          value={player.currentTime}
          minimumTrackTintColor={COLORS.yellow}
          maximumTrackTintColor="gray"
          thumbTintColor={COLORS.yellow}
          onTouchStart={player.pause}
          onTouchEnd={player.play}
          onSlidingComplete={seconds => player.seekToTime(seconds)}
        />
        <Text style={styles.progressBarText}>{player.durationString}</Text>
      </View>

      <View style={styles.actionButtonsOther}>
        <View
          style={{
            marginTop:-1,
            flexDirection: 'row',
            display: 'flex',
          }}>
          <View
            style={{
              borderColor: COLORS.lime,
              borderWidth: 5,
              height: 40,
              width: 40,
              borderRadius: 30,
            }}>
            <TouchableOpacity
              onPress={player.previous}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: COLORS.gredient,
              }}>
              <FontAwesomeIcon
                style={{padding: SIZES.padding * 0.5, left: SIZES.padding * 0.3}}
                name="step-backward"
                color="white"
                size={14}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop:SIZES.padding * -1,
              borderColor:COLORS.lime,
              borderWidth: 5,
              height: 60,
              width: 60,
              borderRadius: 30,
              marginHorizontal: 10,
            }}>
            {player.status === 'play' ? (
              <TouchableOpacity
                onPress={player.pause}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                  borderWidth: 5,
                  borderColor:COLORS.gredient
                }}>
                <FontAwesomeIcon
                  style={{padding: SIZES.padding * 1.3}}
                  name="pause"
                  color="white"
                  size={16}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={player.play}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                  borderWidth: 5,
                  borderColor: COLORS.gredient,
                }}>
                <FontAwesomeIcon
                  name="play"
                  color="white"
                  size={16}
                  style={{padding: SIZES.padding * 1.3, marginLeft:SIZES.padding * 0.3}}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              borderColor: COLORS.lime,
              borderWidth: 5,
              height: 40,
              width: 40,
              borderRadius: 30,
            }}>
            <TouchableOpacity
              onPress={player.next}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: COLORS.gredient,
              }}>
              <FontAwesomeIcon
                style={{padding: SIZES.padding * 0.5, left: SIZES.padding * 0.3}}
                name="step-forward"
                color="white"
                size={14}
              />
            </TouchableOpacity>
          </View>

          {/* <Slider
                    style={{width: '40%', height: 50}}
                    minimumValue={0}
                    maximumValue={100}
                    value={player.volume}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="gray"
                    thumbTintColor='#FFFFFF'
                    onSlidingComplete={(volume) => player.setVolume(volume)}
                /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
  },
  progressBarText: {
    color: 'white',
    alignSelf: 'center',
  },
  actionButtonsOther: {
    justifyContent: 'center',
    marginVertical: 15,
  },
});

export default Playlist;
