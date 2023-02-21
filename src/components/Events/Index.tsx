import React, {SetStateAction, useState} from 'react';

import {GestureResponderEvent, View} from 'react-native';

import Featured from './Featured/Featured';
import EventDetails from './EventDetails/EventDetails';
import ArtistProfile from '../ArtistProfile/ArtistProfile';
import Albums from '../Albums/Album';

export default function EventsOnboarding({navigation}: any) {
  const [url, setUrl] = useState('featured');

  return (
    <View>
      {url === 'featured' ? (
        <Featured
          navigation={navigation}
          setUrl={setUrl}
          url={url}
          onPress={function (event: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
        />
      ) : url === 'detail' ? (
        <EventDetails
          navigation={navigation}
          setUrl={setUrl}
          url={url}
          onPress={function (event: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
        />
      ) : url === 'artistProfile' ? (
        <ArtistProfile
          onPress={function (event: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          id={0}
          name={''}
          path={''}
          type={''}
          img={undefined}
          setList={function (value: SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
          setUrl={setUrl}
        />
      ) : (
        url === 'album' && (
          <Albums
            setUrl={setUrl}
            onPress={function (event: GestureResponderEvent): void {
              throw new Error('Function not implemented.');
            }}
            id={0}
            name={''}
            path={''}
            type={''}
            img={undefined}
            setList={function (value: SetStateAction<boolean>): void {
              throw new Error('Function not implemented.');
            }}
          />
        )
      )}
    </View>
  );
}
