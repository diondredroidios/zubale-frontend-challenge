import DatabaseService from "./DatabaseService";
import Quote from "../Models/Quote";

class QuotesService {
    /**
     * @returns QuotesService
     */
    static instance = new QuotesService()

    static storageKey = (id) => `QUOTE_${id}`

    quotes = {}
    quotesHandlers = []

    constructor() {
        this.observeQuotes()
    }

    observeQuotes() {
        DatabaseService.instance.when(quotes => {
            this.quotes = quotes
            this.notifyQuotesHandlers()
        })
    }

    when(quotesHandler) {
        quotesHandler(this.quotes)
        this.quotesHandlers.push(quotesHandler)
    }

    notifyQuotesHandlers() {
        this.quotesHandlers.forEach(quotesHandler => quotesHandler(this.quotes))
    }

    async addQuote(text, author) {
        const id = (Math.random() * 500) + ""
        const addedAt = Date.now()
        const quote = new Quote(id, text, author, addedAt)
        try {
            return DatabaseService.instance.setQuote(id, quote)
        } catch (error) {
            console.error("Unable to add quote", error);
            throw error
        }
    }

    async toggleLike(id) {
        // get quote by id
        let quote = this.quotes[id]

        // change rating
        if (quote.didLike) {
            quote.rating--
        } else {
            quote.rating++
        }

        // toggle didLike
        quote.didLike = !quote.didLike

        // save
        try {
            return await DatabaseService.instance.setQuote(id, quote)
        } catch (error) {
            console.error("Couldn't toggle like", error);
        }
    }
}

export default QuotesService