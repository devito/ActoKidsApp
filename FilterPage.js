/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  Button,
  Navigator,
  ScrollView,
  View
} from 'react-native';
import Filter from './filter';
import CheckBox from 'react-native-checkbox';

export default class FilterPage extends Component {
    constructor(props) {
    super(props);
    this.state= { activity_types: ['outdoors', 'sports', 'music', 'zoo', 'art', 'camps', 'museum', 'other'], 
      disability_types: ['cognitive', 'mobility', 'hearing', 'vision', 'sensory'],
      frequency: ['once', 'recurring'],
      day_of_week:['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'],
      time_of_day:['morning', 'noon', 'evening'],
      }
  }
_navigate(){
  this.props.navigator.push({title: 'Search Page', index: 2})
}

  render() {
    return (   
      <View>  
      <ScrollView>
        <Text>
          Welcome to ActoKids!
        </Text>
        <Text style={ styles.header }>
          Activity Types
        </Text>
        <CheckBox
          label='Outdoors & Nature'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('outdoors'), 1)}
        />
        <CheckBox
          label='Sports'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('sports'), 1)}
        />
        <CheckBox
          label='Music'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('music'), 1)}
        />
        <CheckBox
          label='Zoo'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('zoo'), 1)}
        />
        <CheckBox
          label='Art'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('art'), 1)}
        />
<CheckBox
          label='Camps'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('camps'), 1)}
        /><CheckBox
          label='Museum'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('museum'), 1)}
        />
        <CheckBox
          label='Other'
          checked={true}
         onChange={(checked) => this.activity_types.splice(this.activity_types.indexOf('other'), 1)}
        />
      <Text style={ styles.header }>
          Disability Types
        </Text>
        <CheckBox
          label='Cognitive'
          checked={true}
         onChange={(checked) => this.disability_types.splice(this.disability_types.indexOf('cognitive'), 1)}
        />
          <CheckBox
          label='Mobility'
          checked={true}
         onChange={(checked) => this.disability_types.splice(this.disability_types.indexOf('mobility'), 1)}
        />
          <CheckBox
          label='Hearing'
          checked={true}
         onChange={(checked) => this.disability_types.splice(this.disability_types.indexOf('hearing'), 1)}
        />
          <CheckBox
          label='Vision'
          checked={true}
         onChange={(checked) => this.disability_types.splice(this.disability_types.indexOf('vision'), 1)}
        />
          <CheckBox
          label='Sensory'
          checked={true}
         onChange={(checked) => this.disability_types.splice(this.disability_types.indexOf('sensory'), 1)}
        />

<Text style={ styles.header }>
          Frequency
        </Text>
   <CheckBox
          label='One-time'
          checked={true}
         onChange={(checked) => this.frequency.splice(this.frequency.indexOf('once'), 1)}
        />
   <CheckBox
          label='Recurring'
          checked={true}
         onChange={(checked) => this.frequency.splice(this.frequency.indexOf('recurring'), 1)}
        />
<Text style={ styles.header }>
          Day of Week
        </Text>
        <CheckBox
          label='Sunday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('sun'), 1)}
        />
        <CheckBox
          label='Monday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('mon'), 1)}
        /><CheckBox
          label='Tuesday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('tues'), 1)}
        /><CheckBox
          label='Wednesday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('wed'), 1)}
        /><CheckBox
          label='Thursday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('thurs'), 1)}
        /><CheckBox
          label='Friday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('fri'), 1)}
        /><CheckBox
          label='Saturday'
          checked={true}
         onChange={(checked) => this.day_of_week.splice(this.day_of_week.indexOf('sat'), 1)}
        />
<Text style={ styles.header }>
          Time of Day
        </Text>
        <CheckBox
          label='Morning(before 12pm)'
          checked={true}
         onChange={(checked) => this.time_of_day.splice(this.time_of_day.indexOf('morning'), 1)}
        />
         <CheckBox
          label='Afternoon'
          checked={true}
         onChange={(checked) => this.time_of_day.splice(this.time_of_day.indexOf('noon'), 1)}
        />
         <CheckBox
          label='Evening'
          checked={true}
         onChange={(checked) => this.time_of_day.splice(this.time_of_day.indexOf('evening'), 1)}
        />
<Text style={ styles.header }>
          Cost
        </Text>
        
        <Text style={ styles.header }>
          Distance
        </Text>
           <Button
            onPress={ () => this._navigate() }
            title="Submit"
            accessibilityLabel="Submit"
          />
</ScrollView>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: { 
    fontSize: 18,
    color: 'purple',
  }
});



//AppRegistry.registerComponent('ActoKids', () => ActoKids);