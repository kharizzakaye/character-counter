import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CardComponent from './CardComponent';
import LetterDensityComponent from './LetterDensityComponent';

const TextAreaComponent = () => {

    const [textData, setTextData] = React.useState<string>("");
    const [approxReadingTime, setApproxReadingTime] = React.useState<number>(0);
    const [totalCharacters, setTotalCharacters] = React.useState<number>(0);
    const [wordCount, setWordCount] = React.useState<number>(0);
    const [sentenceCount, setSentenceCount] = React.useState<number>(0);

    const onTextChange = (event: any) => {

        setTextData(event.target.value);

        if (event.target.value === "") 
        {
            setTotalCharacters(0);
            setWordCount(0);
            setSentenceCount(0);
            setApproxReadingTime(0);
        }
        else
        {
            const characters = event.target.value.split('');
            setTotalCharacters(characters.length);
    
            const words = event.target.value.split(' ');
            setWordCount(words.length);
    
            const sentences = event.target.value.split(/[.!?]/);
            setSentenceCount(sentences.length);
    
            setApproxReadingTime(words.length/ 200);
        }
    }


    return (
        <>
            <h1>Analyze your text in real-time.</h1>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows={4}
                        placeholder="Start typing here... (Or paste your text)"
                        onChange={(event) => { onTextChange(event) }}
                    />

                    <Row>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="lblExcludeSpaces"
                                label="Exclude spaces"
                            />
                        </Col>

                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="lblSetCharacterLimit"
                                label="Set Character Limit"
                            />
                        </Col>

                       <Col>
                            Approx. reading time: {approxReadingTime} 
                            { approxReadingTime <= 1 ? ' minute' : ' minutes' }
                       </Col>
                    </Row>
                </Form.Group>
            </Form>


            <Row>
                <Col>
                    <CardComponent cardTitle="Total Characters" count={totalCharacters} />
                </Col>

                <Col>
                    <CardComponent cardTitle="Word Count" count={wordCount} />
                </Col>

                <Col>
                    <CardComponent cardTitle="Sentence Count" count={sentenceCount} />
                </Col>
            </Row>


            <LetterDensityComponent textData={textData} />
        </>
    )
}

export default TextAreaComponent