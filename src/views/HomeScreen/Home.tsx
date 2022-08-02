import React from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-paper';

import Banner from '../../components/Banner';
import CatogComponent from '../../components/Categories';
import SongsComponent from '../../components/Songs';
import RecentSearch from '../../components/SearchRecent';

import {COLORS, FONTS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const ArrowNext = require('../../assets/images/ArrowNext.png');
const ArtistProfile = require('../../assets/images/ArtistProfile.png');
const Oval = require('../../assets/images/Oval.png');
const Oval2 = require('../../assets/images/Oval2.png');
const backArrow = require('../../assets/images/backArrow.png');
const nextArrow = require('../../assets/images/nextArrow.png');
const insightIcon = require('../../assets/images/insightIcon.png');
const songIcon = require('../../assets/images/songIcon.png');
const likeIcon = require('../../assets/images/likeIcon.png');
const userIcon = require('../../assets/images/userIcon.png');

interface Props {
  navigation: any;
}

class Home extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <ScrollView>
          {/* <Banner navigation={this.props.navigation} /> */}
          <RecentSearch navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 360,
            }}>
            <Text
              style={{
                marginLeft: SIZES.padding * 2,
                ...FONTS.h3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Popular Songs
            </Text>
            <Image source={ArrowNext} />
          </View>
          <SongsComponent navigation={this.props.navigation} />
          <View style={{ marginLeft: SIZES.padding * 3 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 340,
              }}>
              <Image source={ArtistProfile} />
              <View>
                <Text
                  style={[
                    {
                      marginTop: 0,
                      ...FONTS.body2,
                      color: COLORS.white,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Dunya
                </Text>
                <Text
                  style={[
                    {marginTop: 0, ...FONTS.body4, color: COLORS.yellow},
                  ]}>
                  Mahir Zain
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ImageBackground
                  source={Oval}
                  resizeMode="cover"
                  style={{width: 40, height: 40}}>
                  <Image
                    source={backArrow}
                    style={{margin: SIZES.padding * 1.6}}
                  />
                </ImageBackground>
                <ImageBackground
                  source={Oval2}
                  resizeMode="cover"
                  style={[{width: 60, height: 60}]}>
                  <Icon
                    name="play"
                    color="white"
                    style={{margin: SIZES.padding * 2.5}}
                  />
                </ImageBackground>
                <ImageBackground
                  source={Oval}
                  resizeMode="cover"
                  style={{width: 40, height: 40}}>
                  <Image
                    source={nextArrow}
                    style={{margin: SIZES.padding * 1.6}}
                  />
                </ImageBackground>
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.lime,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                height: 106,
                left: -22,
                marginTop: SIZES.padding * 3,
                width: 385,
              }}>
              <View
                style={{
                  width: 400,
                  marginTop: SIZES.padding * 2,
                  marginLeft: SIZES.padding * 3,
                }}>
                <View
                  style={{
                    width: 320,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ImageBackground
                    source={Oval2}
                    resizeMode="cover"
                    style={[
                      {
                        width: 70,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image source={songIcon} />
                  </ImageBackground>
                  <ImageBackground
                    source={Oval2}
                    resizeMode="cover"
                    style={[
                      {
                        width: 70,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image source={insightIcon} />
                  </ImageBackground>
                  <ImageBackground
                    source={Oval2}
                    resizeMode="cover"
                    style={[
                      {
                        width: 70,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image source={likeIcon} />
                  </ImageBackground>
                  <ImageBackground
                    source={Oval2}
                    resizeMode="cover"
                    style={[
                      {
                        width: 70,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Image source={userIcon} />
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;