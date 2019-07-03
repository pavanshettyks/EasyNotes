import React, { Component } from 'react'
import { Alert,  Text, View, TextInput , ScrollView,StyleSheet} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {Overlay,Button, } from 'react-native-elements';
import RNTextDetector from 'react-native-text-detector';

export class Camera extends Component {
    constructor(){
        super();    
        this.state = {
            isVisible: false,
            isEditable:false,
            data:"pks boooooooooom \n \n \n \n \n \n \n\n \n \n \n \n \n \n \n \n \n \n boooo \n \n \n \n \n \n \n \n \n \n \n  \n\n boonm \n boooooooooom \n boonm \n boooooooooom \n boonm \n "
            }
        }

    click = async () => {
        Alert.alert("te1t");

        try {
          const options = {
            quality: 0.8,
            base64: true,
            skipProcessing: true,
          };
          const { uri } = await this.camera.takePictureAsync(options);
          const visionResp = await RNTextDetector.detectFromUri(uri);
        //  this.props.store.memoStore.addItem(visionResp);
          console.log('visionResp', visionResp);
          
            } catch (e) {
          console.warn(e);
        }
      
        //memoStore.loaderFalse();
        //console.log('try outside', memoStore.loader);
       // this.setState({isVisible:!this.state.isVisible});

        }

    render() {
        return (
            <View style= {{flex:1}}>
                <RNCamera
                 ref={ref => {
                            this.camera = ref;
                        }}
                 autoFocus={RNCamera.Constants.AutoFocus.on}
                 style={{
                       flex: 1,
                        width: '100%',
                    }}
                >
                   
                    <Overlay isVisible={this.state.isVisible} 
                    >
                           
                            <View style={styles.container}>

                            
                                <View style={styles.containerData}>
                                
                                <Text style={{fontSize:20,fontFamily:'bold', color:'black'}}>New Note</Text>
                                <ScrollView>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={4}
                                    editable = {this.state.isEditable}
                                    style ={styles.textInput}
                                    onChangeText={(text) => this.setState({data:text})}
                                    value={this.state.data}
                                />
                                </ScrollView>
                           
                               </View>
                               
                               
                                <View style={styles.buttonsRow}>
                                    <Button title= "Cancel" buttonStyle= {styles.buttonStyle} onPress ={ ()=> { this.setState({isVisible:!this.state.isVisible })}} />
                                    <Button title= "Edit" buttonStyle= {styles.buttonStyle} onPress ={ ()=> { this.setState({isEditable:!this.state.isEditable })}} />
                                    <Button title= "Save" buttonStyle= {styles.buttonStyle} onPress ={ ()=> { Alert.alert("lets Save soon")}} />
                                </View>
                            </View>
                            
                     </Overlay>
                     
                    
                    <Button onPress ={this.click} title="click"/>
                 </RNCamera>
            </View>
        )
    }
}

export default Camera

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
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  