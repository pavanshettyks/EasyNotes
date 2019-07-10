import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Button } from 'react-native-elements';
import Notes_Row from './Notes_Row';
import Overlays from './Overlays';
import HeaderOverlay from './HeaderOverlay';


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

              <View>
                  <Text style={styles.welcome}>Easy Notes</Text>
                  <View style={{flexDirection:'row',backgroundColor:'#e6ccff',justifyContent:'space-between', paddingLeft:10,paddingRight:20}}>
                    <Icon name="md-camera" onPress ={this.goToCam} style = {{padding:5, color: 'black'}} size={45} />   
                    <View style={{justifyContent:'center'}}>
                    <Button title = "New Note"  onPress = { ()=> this.props.newNote() }/> 
                    </View>
                  </View>
              </View>
              <View style= {styles.rowsContainer}>
                    <FlatList data = {this.props.notes }
                                        renderItem = { ({item}) => <Notes_Row {...item} /> }
                                        keyExtractor={(item, index) => index.toString()}
                                        /> 
              </View>
              <Overlays/>
              <HeaderOverlay/>
              
          </View>
        ) 
    }
}

export default connect(mapStateToProps,mapDispatcherToAction)(Home);

function mapDispatcherToAction(dispatch){
    return {
        changeText: () => dispatch({ type: 'changeTexts' }),
        newNote: () => dispatch({ type: 'newNote' }),
        changeTextValue: (test) => dispatch({ type: 'changeTextValues', payload: test }),
    }

}

function mapStateToProps(state) {
    return {
    data: state.data,
    notes: state.notes,
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#F5FCFF',
    },
    rowsContainer:{
      flex: 8,
      backgroundColor:"#b7b2bb",
      paddingBottom: 4

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
  