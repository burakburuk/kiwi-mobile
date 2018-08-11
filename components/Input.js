import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const Input = (props) => {
    const {value, handleClear, handleSend, handleKeyDown} = props;
    return (
        <View>
            <TextInput onChangeText={(e) => handleKeyDown(e)}
                       value={value}/>
            <View>
                <Button
                    onPress={handleClear}
                    title="Clear"
                    color="#841584"
                />
                <Button
                    onPress={handleSend}
                    title="Send"
                    color="#841584"
                />
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({});