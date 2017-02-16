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
  ScrollView,
  Button,
  Navigator,
  View
} from 'react-native';
//import Filter from './filter';
import CheckBox from 'react-native-checkbox';

//import SearchBar from 'react-native-searchbar'; 

export default class EnterEvent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      id: 1, ActivityName: '', date: '', frequency: '', time: '', cost: '', description: '', street_address: '', city: '', state: '', wheelchair_accessible: false,
      wheelchair_accessible_restroom: false, activity_type: '', disability_types: [], age_range : '', parent_participation: false, assistant: false, equipment_provided: '',
      sibling: false, kids_to_staff: '', asl: false, closed_circuit: false, add_charge: false, childcare: false, animals: false
    }

  }

   _navigate (){
  this.props.navigator.push({title: 'Home Screen', index: 0})
}
  render() {
    return (
      <ScrollView>
        <Text>
          Welcome to ActoKids!
        </Text>
        <Text>
          * required fields
        </Text>
        <Text>
          *Activity Name:
        </Text>
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Activity name..."
          onChangeText={(ActivityName) => this.setState({ ActivityName })}
          />
        <Text>
          *Activity Date: 
        </Text>
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="mm/dd/yyyy"
          onChangeText={(date) => this.setState({ date })}
          />
          <Text>
          *Frequency: 
        </Text>
         <CheckBox
          label='One-time'
          checked={false}
         onChange={(checked) => this.setState({frequency : 'one-time'}) }
        />
        <CheckBox
          label='Weekly'
          checked={false}
         onChange={(checked) =>  this.setState({frequency : 'weekly'}) }
        />
        <CheckBox
          label='Monthly'
          checked={false}
         onChange={(checked) => this.setState({frequency : 'monthly'}) }
        />
        <Text>
          *Time:
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="hh:mm-hh:mm"
          onChangeText={(time) => this.setState({ time })}
          />
        <Text>
          *Cost:  $
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder=""
          onChangeText={(cost) => this.setState({ cost })}
          />
        <Text>
          *Location: 
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Street address"
          onChangeText={(street_address) => this.setState({street_address })}
          />
          <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="city"
          onChangeText={(city) => this.setState({ city })}
          />
          <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="state"
          onChangeText={(state) => this.setState({ state })}
          />
        <Text>
          *Description: 
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="description"
          onChangeText={(description) => this.setState({ description })}
          />
        <Text>
          *Wheelchair Accessible: 
        </Text> 
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({wheelchair_accessible : true}) }
        />
        <Text>
          *Wheelchair Accessible Restroom: 
        </Text>
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({wheelchair_accessible_restroom : true}) }
        />
         <Text>
          *Activity Type: 
        </Text> 
     <CheckBox
          label='Outdoors & Nature'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'outdoors'}) }
        />
        <CheckBox
          label='Sports'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'sports'}) }
        />
        <CheckBox
          label='Music'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'music'}) }
        />
        <CheckBox
          label='Zoo'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'zoo'}) }
        />
        <CheckBox
          label='Art'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'art'}) }
        />
         <CheckBox
          label='Camps'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'camps'}) }
        /><CheckBox
          label='Museum'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'museum'}) }
        />
        <CheckBox
          label='Other'
          checked={false}
         onChange={(checked) => this.setState({activity_type : 'other'}) }
        />
        <Text>
          *Disability Type: 
        </Text> 
         <CheckBox
          label='Cognitive'
          checked={false}
         onChange={(checked) => this.disability_types.push('cognitive')}
        />
          <CheckBox
          label='Mobility'
          checked={false}
         onChange={(checked) => this.disability_types.push('mobility')}
        />
          <CheckBox
          label='Hearing'
          checked={false}
         onChange={(checked) => this.disability_types.push('hearing')}
        />
          <CheckBox
          label='Vision'
          checked={false}
         onChange={(checked) => this.disability_types.push('vision')}
        />
          <CheckBox
          label='Sensory'
          checked={false}
         onChange={(checked) => this.disability_types.push('sensory')}
        />
        <Text>
          *Age range: 
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="youngest-oldest"
          onChangeText={(age_range) => this.setState({age_range })}
          />
        <Text>
          *Parent participation required: 
        </Text> 
        <CheckBox
          checked={false}
         onChange={(parent_participation) => this.setState({parent_participation : true}) }
        />
        <Text>
          *Assistant Provided: 
        </Text>
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({assistant : true}) }
        />
         <Text>
          Equipment provided: 
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="List all equipment provided by your organization"
          onChangeText={(equipment_provided) => this.setState({equipment_provided })}
          />
        <Text>
          Sibling participation allowed: 
        </Text> 
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({sibling : true}) }
        />
        <Text>
          Kids to staff ratio: 
        </Text> 
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="kids : staff"
          onChangeText={(kids_to_staff) => this.setState({kids_to_staff })}
          />
         <Text>
          ASL Interpreter available:  
        </Text> 
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({asl: true}) }
        />
        <Text>
          Closed circuit hearing loop:
        </Text>
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({closed_circuit: true}) }
        /> 
        <Text>
          Additional charge for personal care attendant:
        </Text>
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({add_charge: true}) }
        />
         <Text>
          Can accomodate service animals:
        </Text> 
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({animals: true}) }
        />
        <Text>
          Childcare onsite:  
        </Text>
        <CheckBox
          checked={false}
         onChange={(checked) => this.setState({childcare: true}) }
        />
         <Button
         onPress={ () => this._navigate() }
            title="Submit"
            accessibilityLabel="Submit"
          />
              </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});


//AppRegistry.registerComponent('ActoKids', () => ActoKids);