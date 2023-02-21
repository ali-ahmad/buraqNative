import React from 'react';
import {View, ScrollView, Image} from 'react-native';

import {Text} from 'react-native-paper';

import CatogComponent from '../../components/Categories';
import SongsComponent from '../../components/Songs';
import RecentSearch from '../../components/SearchRecent';

const ArrowNext = require('../../assets/images/ArrowNext.png');
const ArtistProfile = require('../../assets/images/ArtistProfile.png');

import PlayList from '../../components/Player';
import Styles from './styles';

interface Props {
  navigation: any;
}
interface audioInterface {
  isPlaying: boolean;
  progress: number;
  count: number;
}

class Home extends React.Component<Props, audioInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPlaying: false,
      count: 0,
      progress: 0,
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <RecentSearch navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
          <View style={Styles.fontContainer}>
            <Text style={Styles.fontText}>Popular Songs</Text>
            <Image source={ArrowNext} />
          </View>
          <SongsComponent navigation={this.props.navigation} />
          <View style={Styles.subContent}>
            <View style={Styles.subContainer}>
              <Image source={ArtistProfile} style={Styles.img} />
              <View style={Styles.subtext}>
                <Text style={Styles.userName}>Dunya</Text>
                <Text style={Styles.subName}>Mahir Zain</Text>
              </View>
              <PlayList />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
