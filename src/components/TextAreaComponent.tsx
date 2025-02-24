import React, { ChangeEvent, useState } from 'react';
import { Col, Row, Form, Alert } from 'react-bootstrap';
import CardComponent from './CardComponent';
import LetterDensityComponent from './LetterDensityComponent';

const TextAreaComponent: React.FC = () => {
    const [textData, setTextData] = useState<string>("");

    const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

    const [characterLimit, setCharacterLimit] = useState<boolean>(false);
    const [characterLimitValue, setCharacterLimitValue] = useState<number>(1);
    const [hasExceededCharacterLimit, setHasExceededCharacterLimit] = useState<boolean>(false);

    const [approxReadingTime, setApproxReadingTime] = useState<number>(0);
    const [totalCharacters, setTotalCharacters] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [sentenceCount, setSentenceCount] = useState<number>(0);

    const calculateTotalCharacters = (text: string) => {
        const length = text.length;
        setTotalCharacters(length);
        displayCharacterLimitMessage(length, characterLimit, characterLimitValue);
    };

    const calculateWordCount = (text: string) => {
        const words = text.trim().split(/\s+/).length;
        setWordCount(words);
        setApproxReadingTime(Number((words / 200).toFixed(2)));
    };

    const calculateSentenceCount = (text: string) => {
        const sentences = text.split(/[.!?]+/).filter(Boolean).length;
        setSentenceCount(sentences);
    };

    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setTextData(value);

        if (value === "") 
        {
            resetCounts();
        } 
        else 
        {
            calculateTotalCharacters(value);
            calculateWordCount(value);
            calculateSentenceCount(value);
        }
    };

    const resetCounts = () => {
        setTotalCharacters(0);
        setWordCount(0);
        setSentenceCount(0);
        setApproxReadingTime(0);
        setHasExceededCharacterLimit(false);
    };

    const onSetCharacterLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setCharacterLimit(isChecked);

        if (isChecked) 
        {
            displayCharacterLimitMessage(totalCharacters, isChecked, characterLimitValue);
            
        } 
        else 
        {
            setHasExceededCharacterLimit(false);
        }  
    };

    const displayCharacterLimitMessage = (characterLength: number, isCheckboxTicked: boolean, limitValue: number) => {
        if (isCheckboxTicked && (characterLength > limitValue)) 
        {
            setHasExceededCharacterLimit(true);
        } 
        else 
        {
            setHasExceededCharacterLimit(false);
        }
    };

    const onCharacterLimitValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setCharacterLimitValue(value);
        displayCharacterLimitMessage(totalCharacters, characterLimit, value);
    };

    return (
        <>
            <h1>Analyze your text in real-time.</h1>

            {hasExceededCharacterLimit && (
                <Alert key="danger" variant="danger">
                    Your text has exceeded the character limit. Please remove some text.
                </Alert>
            )}

            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Start typing here... (Or paste your text)"
                        onChange={onTextChange}
                    />

                    <Row>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="chkExcludeSpaces"
                                label="Exclude spaces"
                                checked={excludeSpaces}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setExcludeSpaces(event.target.checked)}
                            />
                        </Col>

                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="chkSetCharacterLimit"
                                label="Set Character Limit"
                                checked={characterLimit}
                                onChange={onSetCharacterLimitChange}
                            />

                            {characterLimit && (
                                <Form.Control
                                    type="number"
                                    id="txtCharacterLimit"
                                    min={1}
                                    disabled={!characterLimit}
                                    value={characterLimitValue}
                                    onChange={onCharacterLimitValueChange}
                                />
                            )}
                        </Col>

                        <Col>
                            Approx. reading time: {approxReadingTime}
                            {approxReadingTime <= 1 ? ' minute' : ' minutes'}
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
    );
};

export default TextAreaComponent;
