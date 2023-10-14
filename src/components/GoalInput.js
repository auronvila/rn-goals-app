import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import GoalList from './GoalList';
import {StatusBar} from 'expo-status-bar';

export default function GoalInput() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleGoalinput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function submitGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText,
      id: Math.random().toString()
    }]);
    setEnteredGoalText('')
    setIsModalVisible(false)
  }

  function startAddGoalHandler() {
    setIsModalVisible(true)
  }

  return (
    <View style={styles.appContainer}>
      <Button title={'Add Goal'} color={'#ae83e3'} onPress={startAddGoalHandler}/>
      <Modal
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        visible={isModalVisible}>
        {isModalVisible && (
          <View style={styles.inputContainer}>
            <Image style={{width: 150, height: 150, margin: 20}} source={require('../../assets/goal.png')}/>
            <TextInput
              onChangeText={handleGoalinput}
              value={enteredGoalText}
              style={styles.textInput}
              placeholderTextColor={'white'}
              placeholder={'Your course goal'}
            />
            <View style={styles.buttonContainer}>
              <View style={{marginTop: 15, marginHorizontal: 10, width: '30%'}}>
                <Button color={'#f31282'} onPress={() => setIsModalVisible(false)} title={'Cancel'}/>
              </View>
              <View style={{marginTop: 15, marginHorizontal: 10, width: '30%'}}>
                <Button color={'#7e4ac0'} onPress={submitGoalHandler} title={'Add goal'}/>
              </View>
            </View>
          </View>
        )}
      </Modal>
      <GoalList
        startAddGoalHandler={startAddGoalHandler}
        setEnteredGoalText={setEnteredGoalText}
        setCourseGoals={setCourseGoals}
        courseGoals={courseGoals}/>
      <StatusBar style={'light'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingTop: 55,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#36016c'
  },
  textInput: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '80%',
    padding: 8,
    color: 'white'
  },
  appContainer: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 16,
    backgroundColor: '#621dc0'

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})