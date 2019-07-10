import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import {Button } from 'react-native-elements';
import {connect} from 'react-redux';
//import Overlays from './Overlays';
import Icon from 'react-native-vector-icons/Ionicons';


export class Notes_Row extends Component {
    constructor(props){

        super(props);
    }
    

    viewNotes = () => {
        //Alert.alert(this.props.text);
        overlay = {
            id: this.props.id,
            header: this.props.header,
            text:this.props.text,
            isVisible:true,
        }
        this.props.showOverlays(overlay);
    }
    Delete = () => {
        //Alert.alert(this.props.text);
         this.props.deleteNotes(this.props.id);
    }
    editHeader = () => {
        HeaderOverlay = {
            id: this.props.id,
            header: this.props.header,
        }
         this.props.showHeaderOverlays(HeaderOverlay);

    }

    render() {
        return (
            <View style = {styles.container}>
               
               <Icon name="md-create" onPress = { this.editHeader} 
                    style = {{ padding: 5,alignContent:"flex-start", flex: 0, color: 'black'}} size={25} /> 
                <Text style = {styles.text}>{this.props.header}</Text>  
                <View style ={styles.buttonRow}>
                        <Button title = "View" buttonStyle= {styles.buttonEdit} onPress ={this.viewNotes} />
                        <Button title = "Delete" buttonStyle= {styles.buttonDelete} onPress ={ this.Delete } />
                </View>
                
            </View>
        )
    }
}

export default connect(null,mapDispatcherToAction)(Notes_Row);

function mapDispatcherToAction(dispatch){
        return{
            deleteNotes: (id) => dispatch({ type: 'deleteNotes', id: id }),
            showHeaderOverlays: (data) => dispatch({ type: 'showHeaderOverlays', HeaderOverlay:data }),
            showOverlays: (data) => dispatch({type:'showOverlays', Overlay:data })
        }

} 
              
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        padding: 5,
        margin:1,
        backgroundColor:'#e6ccff',
    },
    text: {
        fontWeight: 'bold',

    },
    buttonRow:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    buttonEdit: {
        padding: 10,
        marginRight:10,
        backgroundColor : 'green',
    },
    buttonDelete: {
        padding: 10,
        marginRight:10,
        backgroundColor : 'red',
    },

});
