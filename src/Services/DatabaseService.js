import AsyncStorage from '@react-native-community/async-storage';
import Quote from '../Models/Quote';

const QUOTES = "QUOTES"

class DatabaseService {
    // can be made to use any backend service

    /**
     * @returns DatabaseService
     */
    static instance = new DatabaseService()

    quotesHandlers = []

    when(quotesHandler) {
        this.getQuotes()
            .catch(error => console.error("Couldn't set up quotes handler", error))
            .then(quotes => {
                if (!quotes) quotes = this.setupInitialFakeData()
                quotesHandler(quotes)
                this.quotesHandlers.push(quotesHandler)
            })
    }

    notifyQuotesHandlers() {
        this.getQuotes()
            .catch(error => console.error("Couldn't notify quotes handlers", error))
            .then(quotes => {
                this.quotesHandlers.forEach(quotesHandler => quotesHandler(quotes))
            })
    }

    setupInitialFakeData() {
        quotes = {
            "1": new Quote(1, "To be or not to be, that is the question", "Shakespeare", 1557947178000, 3),
            "0": new Quote(0, "An apple a day keeps the doctor away", "Unknown", 1556968178000, 3),
            "4": new Quote(4, "Keep your face always toward the sunshine - and shadows will fall behind you", "Walt Whitman", 1557547178000),
            "5": new Quote(5, "Be yourself; everyone else is already taken", "Oscar Wilde", 1557533178000)
        }
        const jsonQuotes = JSON.stringify(quotes)
        AsyncStorage
            .setItem(QUOTES, jsonQuotes)
            .catch(error => console.error("Error setting up fake data", error))
        return quotes
    }

    async getQuotes() {
        try {
            let json = await AsyncStorage.getItem(QUOTES)
            let quotes = JSON.parse(json)
            return quotes
        } catch (error) {
            console.error("Error getting quotes", error);
            throw error
        }
    }

    async setQuote(id, quote) {
        try {
            let quotesUpdate = {
                [id]: quote
            }
            quotesUpdateJson = JSON.stringify(quotesUpdate)
            await AsyncStorage.mergeItem(QUOTES, quotesUpdateJson)
            this.notifyQuotesHandlers()
        } catch (error) {
            console.error(`Error setting quote "${id}"`, error);
            throw error
        }
    }
}

export default DatabaseService