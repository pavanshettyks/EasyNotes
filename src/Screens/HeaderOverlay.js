import React, { Component } from 'react'
import { ToastAndroid,Text, View, StyleSheet,TextInput} from 'react-native'
import {Overlay, Button} from 'react-native-elements';
import {connect} from 'react-redux';

export class HeaderOverlay extends Component {
    constructor(props){
        super(props);
    }

    save =() => {
        note ={

            id:this.props.id,
            header:  this.props.header 
        }
        ToastAndroid.show('Updated', ToastAndroid.SHORT);
        this.props.updateHeader(note)  
    }


    render() {
        return (
            <Overlay isVisible = {this.props.isVisible }
            height ="20%"
            >
                   
                    <View style={styles.container}>

                    
                  <View style={styles.containerData}>  
                       
                        <Text style={{fontSize:20,fontFamily:'bold', color:'black'}}>Update Header</Text>

                        <TextInput
                            multiline={false}
                            style ={styles.textInput}
                            onChangeText={(text) => this.props.ChangeText(text) }
                            value={this.props.header}
                        />
                        
                   
                    </View> 
                       
                        
                        <View style={styles.buttonsRow}>
                            <Button title= "Cancel" buttonStyle= {styles.buttonStyle} onPress ={ ()=> this.props.HideHeaderOverlays() } />
                            <Button title= "Save" buttonStyle= {styles.buttonStyle} onPress ={ this.save } />
                        </View>
                    </View>
                    
             </Overlay>
        )
    }
}

export default connect(mapStateToProps,mapDispatcherToAction)(HeaderOverlay);

function mapStateToProps(state){
    return{
        isVisible: state.headerOverlay.isVisible,
        header: state.headerOverlay.header,
        id: state.headerOverlay.id
    }
}

function mapDispatcherToAction(dispatcher){
    return {
        HideHeaderOverlays: ()=> dispatcher({type:'HideHeaderOverlays'}),
        ChangeText: (text)=> dispatcher({type:'ChangeHeaderText',headerText:text}),
        updateHeader: (note) => dispatcher({type:'updateHeader',note:note}),  
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
     
     // justifyContent: 'center',
      //alignItems: 'center',
     // backgroundColor: '#1cadeb',
    },
    containerData: {
        flex: 1 ,
       // justifyContent: 'center',
        //alignItems: 'center',
       // backgroundColor: '#1cadeb',
      },
    textInput:{
        fontWeight: 'bold',
        backgroundColor: '#d5c8c8',
    },
    buttonsRow: {
            flex: 1,
            flexDirection: 'row',
            height: "95%",
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
           
           // alignSelf: 'flex-end'
            

    },
    buttonStyle: {
      padding: 5,
      marginRight:10,
      backgroundColor : 'red'
    },
  
  });
  