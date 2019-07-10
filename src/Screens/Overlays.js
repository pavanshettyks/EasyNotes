import React, { Component } from 'react'
import { ToastAndroid,Text, View, StyleSheet,ScrollView,Alert,TextInput} from 'react-native'
import {Overlay, Button} from 'react-native-elements';
import {connect} from 'react-redux';

export class Overlays extends Component {
    constructor(props){
        super(props);
        this.state ={
            isEditable:true,
        }
    }

    save =() => {
        note ={
            text:this.props.text,
            id:this.props.id,
            header: "Note "+ this.props.id
        }
        ToastAndroid.show('Note Saved', ToastAndroid.SHORT);
        this.props.saveNote(note)  
    }

    update =() => {
        note ={
            text:this.props.text,
            id:this.props.id,
          //  header: "Note "+ this.props.id
        }
        ToastAndroid.show('Note Updated', ToastAndroid.SHORT);
        this.props.updateNote(note)  
    }

    render() {
        return (
            <Overlay isVisible={this.props.isVisible} 
            >
                   
                    <View style={styles.container}>

                    
                        <View style={styles.containerData}>
                        
                        <Text style={{fontSize:20,fontFamily:'bold', color:'black'}}>{this.props.header}</Text>
                        <ScrollView>
                        <TextInput
                            multiline={true}
                            numberOfLines={40}
                            editable = {this.props.isEditable||this.props.isNew}
                            style ={styles.textInput}
                            onChangeText={(text) => this.props.ChangeText(text) }
                            value={this.props.text}
                        />
                        </ScrollView>
                   
                       </View>
                       
                       
                        <View style={styles.buttonsRow}>
                            <Button title= "Cancel" buttonStyle= {styles.buttonStyle} onPress ={ ()=> this.props.HideOverlays() } />
              { !this.props.isEditable && !this.props.isNew &&  <Button title= "Edit" buttonStyle= {styles.buttonStyle} onPress ={ ()=>  this.props.makeEditable()} />}
              { this.props.isNew &&  <Button title= "Save" buttonStyle= {styles.buttonStyle} onPress ={ this.save } /> }
              { this.props.isEditable && !this.props.isNew &&  <Button title= "Update" buttonStyle= {styles.buttonStyle} onPress ={ this.update} />}
                        </View>
                    </View>
                    
             </Overlay>
        )
    }
}

export default connect(mapStateToProps,mapDispatcherToAction)(Overlays);

function mapStateToProps(state){
    return{
        isVisible: state.Overlay.isVisible,
        text: state.Overlay.text,
        header: state.Overlay.header,
        isEditable:state.Overlay.isEditable,
        isNew:state.Overlay.isNew,
        id: state.Overlay.id
    }
}

function mapDispatcherToAction(dispatcher){
    return {
        HideOverlays: ()=> dispatcher({type:'HideOverlays'}),
        ChangeText: (text)=> dispatcher({type:'ChangeText',text:text}),
        saveNote: (note) => dispatcher({type:'saveNote',note:note}),
        updateNote: (note) => dispatcher({type:'updateNote',note:note}),
        makeEditable: () => dispatcher({type:'makeEditable'}),
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
        flex: 8,
       // justifyContent: 'center',
        //alignItems: 'center',
       // backgroundColor: '#1cadeb',
      },
    textInput:{
        height: "100%",
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
      padding: 10,
      marginRight:10,
      backgroundColor : 'red'
    },
  
  });
  