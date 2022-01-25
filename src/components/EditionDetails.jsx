const BookDetails = ({ book }) => {
    let fields = ["title", "publishers", "publish_date", "works", "pages"];

for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (book[field]) {
        console.log(book[field]);
    }

    
    }
    return <p>testing</p>
}

export default BookDetails