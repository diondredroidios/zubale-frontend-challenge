class Quote {
    id
    text
    author
    addedAt
    rating

    didLike
    
    constructor(id, text, author, addedAt, rating = 0) {
        this.id = id
        this.text = text
        this.author = author
        this.addedAt = addedAt
        this.rating = rating
    }
}

export default Quote