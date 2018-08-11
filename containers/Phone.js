import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneKeyboard from '../components/PhoneKeyboard';
import Input from '../components/Input';
import Result from '../components/Result';
import {postConvertWordsToTNine} from '../services';

export default class Phone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            result: ""
        }
    }

    handleClick = (number) => {
        console.log(number);
        this.setState((prevState, props) => ({
            input: prevState.input + number
        }));
    };

    handleKeyDown = (e) => {
        this.setState({input: e.target.value});
    };

    handleSend = async () => {
        const {response, error} = await postConvertWordsToTNine({message: this.state.input});
        console.log(response);
        if (error) {
            console.log(response);
        } else {
            const reducer = (accumulator, currentValue) => accumulator + currentValue + " ";
            const result = response.words.reduce(reducer, "");
            this.setState({result: result});
        }
    };

    handleClear = () => {
        this.setState({input: ""});
    };

    render() {
        const {input, result} = this.state;
        return (
            <View>
                <Result value={result}/>
                <Input value={input} handleKeyDown={this.handleKeyDown} handleSend={this.handleSend}
                       handleClear={this.handleClear}/>
                <PhoneKeyboard handleClick={this.handleClick}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({});