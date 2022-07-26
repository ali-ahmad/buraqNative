import React from "react";
import {View, StyleSheet} from 'react-native';

import Banner from "../../components/common/Banner";

interface Props {
  navigation: any
}

class Home extends React.Component<Props> {
  constructor(props:any) {
    super(props)
}

render(){
  return (
    <View style={styles.container}>
        <Banner navigation={this.props.navigation}/>
    </View>
     );
}
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1F2B1A'
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
    color:'#fff',
    margin:10,
    marginLeft:15
  }
})