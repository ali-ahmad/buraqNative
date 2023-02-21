import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, images} from '../../constants';

import Style from './styles';

interface Props {
  navigation: any;
}

const SignUp = ({navigation}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  function renderLogo() {
    return (
      <View style={Style.container}>
        <Image
          source={images.buraqLogo}
          resizeMode="contain"
          style={Style.img}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={Style.formContainer}>
        {/* Full Name */}
        <View style={Style.textContainer}>
          <Text style={Style.heading}>Full Name</Text>
          <TextInput
            style={Style.textField}
            placeholder="Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>

        {/* Password */}
        <View style={Style.textContainer}>
          <Text style={Style.heading}>Password</Text>
          <TextInput
            style={Style.textField}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={Style.touchable}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={Style.minImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={Style.btnContainer}>
        <TouchableOpacity
          style={Style.btnText}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={Style.signText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAreaCodesModal() {
    const renderItem = ({item}: any) => {
      return (
        <TouchableOpacity
          style={Style.itemContainer}
          onPress={() => {
            setSelectedArea(item);
            setModalVisible(false);
          }}>
          <Image source={{uri: item.flag}} style={Style.imgContainer} />
          <Text style={{...FONTS.body4}}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={Style.modalContainer}>
            <View style={Style.modalContent}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                // keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={Style.modalList}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.lime, COLORS.lime, COLORS.emerald]}
        style={{flex: 1}}>
        <ScrollView>
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
      {renderAreaCodesModal()}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
