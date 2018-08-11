import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Result = (props) => {
    const {value} = props;
    return (
        <View>
            <Text numberOfLines={5}>
                {value}
            </Text>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({});