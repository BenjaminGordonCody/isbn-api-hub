const EditionDetails = ({ edition }) => {




    let fields = ["title", "publishers", "publish_date", "pages",];
    const foundFields = [];

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (edition[field]) {
            foundFields.push(edition[field]);
        }

    }
    return <ul>{ foundFields.map(field => <li>{field}</li>) }</ul>
}

export default EditionDetails