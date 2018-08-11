import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const PhoneKeyboard = (props) => {
    const {handleClick} = props;
    return (
        <View style={styles.keyPadContainer}>
            <View style={styles.keyContainer}>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(1)} title="1"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(2)} title="2"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(3)} title="3"/>
                </View>
            </View>
            <View style={styles.keyContainer}>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(4)} title="4"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(5)} title="5"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(6)} title="6"/>
                </View>
            </View>
            <View style={styles.keyContainer}>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(7)} title="7"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(8)} title="8"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(9)} title="9"/>
                </View>
            </View>
            <View style={styles.keyContainer}>
                <View style={styles.key}>
                    <Button onPress={() => handleClick("*")} title="*"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick(0)} title="0"/>
                </View>
                <View style={styles.key}>
                    <Button onPress={() => handleClick("#")} title="#"/>
                </View>
            </View>
        </View>
    );
};

export default PhoneKeyboard;

const styles = StyleSheet.create({
    keyPadContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    keyContainer: {
        flexDirection: 'row'
    },
    key: {
        width: 60,
        height: 30,
        margin: 1,
        backgroundColor: 'powderblue'
    }
});