import React from "react";
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
    Platform
} from "react-native"

import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import Styles from "./styles";

interface Props {
    navigation:any
}

const Login = ({ navigation}:Props) => {

    const [showPassword, setShowPassword] = React.useState(false)

    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    function renderHeader() {
        return (
            <TouchableOpacity
                style={Styles.container}
                onPress={() => navigation.navigate("Signup")}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={Styles.bgBack}
                />

                <Text style={Styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={Styles.logoContainer}
            >
                <Image
                    source={images.buraqLogo}
                    resizeMode="contain"
                    style={{
                        width: "30%"
                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={Styles.formContainer}
            >
                {/* Full Name */}
                <View style={Styles.subContainer}>
                    <Text style={Styles.heading}>Full Name</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Password */}
                <View style={Styles.passContainer}>
                    <Text style={Styles.passField}>Password</Text>
                    <TextInput
                        style={Styles.passInput}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={Styles.passContent}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={Styles.tintContent}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={Styles.btnContainer}>
                <TouchableOpacity
                    style={Styles.btnText}
                    onPress={() => navigation.navigate("Tabs")}
                >
                    <Text style={Styles.btnTxt}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderAreaCodesModal() {

        const renderItem = ({ item }:any) => {
            return (
                <TouchableOpacity
                    style={Styles.renderItem}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={Styles.renderImg}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={Styles.modal}>
                        <View
                            style={Styles.modalContent}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                // keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={Styles.modalList}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.lime ,COLORS.emerald,]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    )
}

export default Login;