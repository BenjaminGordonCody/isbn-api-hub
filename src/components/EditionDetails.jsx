const EditionDetails = ({ edition }) => {
    let fields = ["title", "publishers", "publish_date", "works", "pages"];

for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (edition[field]) {
        console.log(edition[field]);
    }

    
    }
    return <p>testing</p>
}

export default EditionDetails