import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import readmeFile from '../res/README.md';

// const readmeFile = require('../res/README.md');

const DocumentationPage = () => {

    const [readme, setReadme] = useState();

    useEffect(() => {
        const getReadme = async () => {
            // fs.readFile('../res/README.md', 'utf8', (err, data) => {
            //     setReadme(data);
            // });
            const text = await fetch(readmeFile).then(r => r.text());
            setReadme(text);
        };
        
        getReadme();
    }, []);

    return (
        <div className="documentation-body">
            <ReactMarkdown className="documentation-text" children={readme}/>
        </div>
    )
}

export default DocumentationPage;
