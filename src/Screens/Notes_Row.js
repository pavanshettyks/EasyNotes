import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import {Button } from 'react-native-elements';
import {connect} from 'react-redux';
import Overlays from './Overlays';


export class Notes_Row extends Component {
    constructor(props){
        super(props);
    }
    

    Edit = () => {
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
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}> {this.props.header} </Text>
                <View style ={styles.buttonRow}>
                        <Button title = "View" buttonStyle= {styles.buttonEdit} onPress ={this.Edit} />
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
