import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from './GoalItem';

export default function GoalList(props) {
  function handleDelete(id) {
    props.setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.id !== id);
    })
    props.setEnteredGoalText('')
  }

  function handleEdit(id) {
    props.setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => {
        props.setEnteredGoalText(item.text)
        return item.id !== id
      })
    })
    props.startAddGoalHandler()
  }

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.courseGoals}
        renderItem={(itemData) => <GoalItem handleEdit={handleEdit} handleDelete={handleDelete} itemData={itemData}/>}>
        keyExtractor={(item, index) => item.id}
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 10,
    borderRadius: 6,
    marginTop: 8,
  },
})