import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function GoalItem(props) {
  function deleteGoalHandler() {
    props.handleDelete(props.itemData.item.id);
  }

  function editGoalHandler() {
    props.handleEdit(props.itemData.item.id);
  }

  return (
    <View style={styles.goalsListinput}>
      <Text style={{color: 'white'}}>{props.itemData.item.text}</Text>
      <View style={styles.iconsWrapper}>
        <Pressable style={({pressed}) => pressed && styles.pressableStyle} android_ripple={{color: '#dddddd'}}
                   onPress={editGoalHandler}>
          <Feather style={styles.iconStyle} color={'white'} name={'edit'}/>
        </Pressable>
        <Pressable style={({pressed}) => pressed && styles.pressableStyle} android_ripple={{color: '#dddddd'}}
                   onPress={deleteGoalHandler}>
          <Feather style={styles.iconStyle} color={'red'} name={'trash'}/>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  goalsListinput: {
    backgroundColor: '#36016c',
    padding: 10,
    borderRadius: 6,
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 9,
  },
  iconsWrapper: {
    flexDirection: 'row',
  },
  pressableStyle: {
    opacity: 0.5
  }
})