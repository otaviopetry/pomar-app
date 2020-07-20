import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import api from '../../../services/api';

import styles from '../styles.js';

export default function QuizQuestion01({ navigation }) {

    // navigate back
    function goBack () {
        navigation.goBack();
    }
    
    const [questionData, setQuestionData] = useState({});

    useEffect( () => {
        api.get('/quiz/1').then( response => {
            setQuestionData(response.data);
            console.log(questionData);
        })
    }, []);

    // initialize selected answer state
    const [selectedAnswer, setSelectedAnswer] = useState(['0']);

    function handleSelectAnswer (id) {

        if ( selectedAnswer === id) {
            setSelectedAnswer([0]);
        } else {
            setSelectedAnswer([id]);            
        }

        console.log(selectedAnswer);
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <>
                <Text style={styles.question}>{questionData.question}</Text>              
                
                <View style={styles.answerContainer}>
                    {questionData.answers?.map( answer => (
                        <TouchableOpacity 
                            key={answer.id} 
                            style={[
                                styles.answer,
                                selectedAnswer[0] === answer.id ? styles.selectedAnswer : {}
                            ]}
                            onPress={ () => handleSelectAnswer(answer.id) }
                            activeOpacity={0.9}
                        >
                            <Text 
                                style={[
                                    styles.answerText,
                                    selectedAnswer[0] === answer.id && styles.selectedAnswerText
                                ]}
                            >
                                {answer.text}
                            </Text>                            
                        </TouchableOpacity>                            
                    ))}
                </View>

                <TouchableOpacity onPress={ () => navigation.navigate(`QuizQuestion${questionData?.id+1}`) } style={styles.nextQuestion} >
                    <Text style={styles.nextQuestionText}>Próxima</Text>
                </TouchableOpacity>
    
                
            </>
                        
        </SafeAreaView>
    );
}