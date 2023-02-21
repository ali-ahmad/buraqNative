import React, {FC, useState} from 'react';

import {
  View,
  Image,
  GestureResponderEvent,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import SoundPlayer from 'react-native-sound';
import {useAudioHelper} from '../../Services/services';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants';
import tracks from './dummy';

const Jubin = require('../../assets/images/jubin.jpg');

import Styles from './styles';

interface Props {
  setIndex?: React.Dispatch<React.SetStateAction<string>>;
  onPress: (event: GestureResponderEvent) => void;
  id: number;
  name: string;
  path: string;
  type: string;
  img: any;
  setList: React.Dispatch<React.SetStateAction<boolean>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ArtistProfile: FC<Props> = ({setUrl}) => {
  const [index, setIndex] = useState(0);
  const [moveList, setList] = useState(false);

  const player = useAudioHelper({
    listSounds: [
      {
        id: 0,
        type: 'app-bundle',
        path: 'terebina.mp3',
        name: 'Blue Dream - Cheel',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        id: 1,
        type: 'app-bundle',
        path: 'maintujhe.mp3',
        name: 'Know Myself - Patrick Patrikios',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        id: 2,
        type: 'app-bundle',
        path: 'humnawa.mp3',
        name: 'Aadi Rockx',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        id: 3,
        type: 'app-bundle',
        path: 'terebina.mp3',
        name: 'Blue Dream - Cheel',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        id: 4,
        type: 'app-bundle',
        path: 'maintujhe.mp3',
        name: 'Know Myself - Patrick Patrikios',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      {
        id: 5,
        type: 'app-bundle',
        path: 'humnawa.mp3',
        name: 'Aadi Rockx',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
      // { type: 'network', path: 'https://raw.githubusercontent.com/uit2712/RNPlaySound/develop/sounds/Tropic%20-%20Anno%20Domini%20Beats.mp3', name: 'Tropic - Anno Domini Beats', },
    ],

    timeRate: 15,
    isLogStatus: true,
    index: index,
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.contentContainer}>
        <Image
          source={Jubin}
          resizeMode={'cover'}
          style={Styles.imgContainer}
        />
        <View>
          <Text style={Styles.subHeading}>Jubin Nautiyal</Text>
          <Text style={Styles.heading}>Composer</Text>
        </View>
      </View>
      <View style={Styles.ltContainer}>
        <Text
          style={!moveList ? Styles.listBorder : Styles.trackPlayer}
          onPress={() => setList(false)}>
          Tracks
        </Text>
        <Text
          style={moveList ? Styles.listBorder : Styles.trackPlayer}
          onPress={() => setList(true)}>
          Albums
        </Text>
      </View>
      <View style={Styles.scrollContainer}>
        {moveList ? (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <FlatList
              data={tracks}
              keyExtractor={item => `${item.id}`}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableWithoutFeedback>
                    <Surface style={Styles.albumSelecter}>
                      <View style={Styles.albumContainer}>
                        <Image
                          style={Styles.imgHead}
                          resizeMode={'cover'}
                          source={item.img}
                        />
                        <Text
                          style={Styles.bottomText}
                          onPress={() => setUrl('album')}>
                          {item.path}
                        </Text>
                      </View>
                    </Surface>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <FlatList
              data={tracks}
              keyExtractor={item => `${item.id}`}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableWithoutFeedback>
                    <Surface style={Styles.listContainer}>
                      <View style={Styles.items}>
                        <FontAwesomeIcon
                          key={item.id}
                          name={
                            item.id === player.index && player.status === 'play'
                              ? 'pause'
                              : 'play'
                          }
                          color={COLORS.white}
                          onPress={() => player.playList(item.id)}
                        />
                        <Image
                          style={Styles.imgCon}
                          resizeMode={'cover'}
                          source={item.img}
                        />
                        <Text style={Styles.textContainer}>{item.path}</Text>
                      </View>
                      <FontAwesomeIcon name="download" color={COLORS.white} />
                    </Surface>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ArtistProfile;
