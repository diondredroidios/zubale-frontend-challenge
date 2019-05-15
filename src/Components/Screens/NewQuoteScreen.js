import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../../Styles/Styles';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Alert } from 'react-native';
import QuotesService from '../../Services/QuotesService';

class NewQuoteScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'New quote',
        headerRight: <View style={{ paddingRight: 10 }}>
            <Button title={`Save`} onPress={navigation.getParam("addQuote")} disabled={navigation.getParam("pending")} />
        </View>
    });

    state = {
        quote: "",
        author: "",
    };

    componentDidMount() {
        this.props.navigation.setParams({
            addQuote: this.addQuote.bind(this)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pending !== this.state.pending) {
            this.props.navigation.setParams({ pending: this.state.pending })
        }
    }

    onChangeQuoteText(quote) {
        this.setState({ quote })
    }

    onChangeAuthorText(author) {
        this.setState({ author })
    }

    addQuote() {
        this.setState({ pending: true }, async () => {
            // validate
            const text = this.state.quote.trim()
            const author = this.state.author.trim()
            if (text === "") {
                Alert.alert('Please provide a quote', null, [{ text: "OK", style: 'default', onPress: () => this.setState({ pending: false }) }])
                return
            }
            if (author === "") {
                Alert.alert('Please provide an author', null, [{ text: "OK", style: 'default', onPress: () => this.setState({ pending: false }) }])
                return
            }

            // add quote
            try {
                await QuotesService.instance.addQuote(text, author)

                // go back
                this.props.navigation.goBack()

            } catch (error) {
                Alert.alert("Error", "Unable to save quote", [{ text: "OK", style: "default" }])
                this.setState({ pending: false })
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <View style={Styles.container.flexVertical}>

                <Text style={Styles.text.h4}>Quote</Text>
                <View style={Styles.container.p}>
                    <TextInput
                        ref={this.quoteTextInput}
                        multiline={true}
                        autoFocus={true}
                        onChangeText={this.onChangeQuoteText.bind(this)}
                        placeholder={`Quote...`} />
                </View>

                <Text style={Styles.text.h4}>Author</Text>
                <View style={Styles.container.p}>
                    <TextInput
                        ref={this.authorTextInput}
                        onChangeText={this.onChangeAuthorText.bind(this)}
                        onSubmitEditing={this.addQuote.bind(this)}
                        placeholder={`Author...`} />
                </View>

            </View>
        );
    }
}

export default NewQuoteScreen;