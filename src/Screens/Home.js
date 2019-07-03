import React, { Component } from 'react'
import { Text, View, StyleSheet,Button} from 'react-native'
import {connect} from 'react-redux';
import {Overlay } from 'react-native-elements';

class Home extends Component {
    constructor(){
    super();    
    this.state = {
        isVisible: false,
        daa :"pk is the tester hhh",
    }
    }
    goToCam = () => {
      this.props.navigation.navigate('Camera')
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>{this.props.data}</Text>
            <Button title= "overlay" onPress ={ ()=> { this.setState({isVisible:true })}} />
            <Button title = "try" onPress = { this.goToCam }/> 
            
              
            <Button title = "tryValue" onPress = { ()=> this.props.changeTextValue(this.state.daa)}/>
          </View>
        ) 
    }
}

export default connect(mapStateToProps,mapDispatcherToAction)(Home);

function mapDispatcherToAction(dispatch){
    return {
        changeText: () => dispatch({ type: 'changeTexts' }),
        changeTextValue: (test) => dispatch({ type: 'changeTextValues', payload: test }),
    }

}

function mapStateToProps(state) {
    return {
    data: state.data
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  