import React, { Component } from 'react';
import QuoteListItem from '../ListItems/QuoteListItem';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import QuotesService from '../../Services/QuotesService';
import Styles from '../../Styles/Styles';

class QuotesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { quotes: [] };
    }

    componentDidMount() {
        QuotesService.instance.when(quotes => {
            let quotesArray = Object.values(quotes)
            this.setState({ quotes: quotesArray })
        })
    }

    render() {
        // get quotes
        let quotes = this.state.quotes

        // sort?
        let { sort } = this.props
        if (sort) {
            quotes.sort(sort)
        }

        return (
            <SafeAreaView style={Styles.screen.default}>
                <FlatList data={quotes}
                    keyExtractor={quote => quote.id.toString()}
                    renderItem={({ item }) => <QuoteListItem quote={item} />} />
            </SafeAreaView>
        );
    }
}

export default QuotesScreen;