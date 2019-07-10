import React, { Component } from 'react'
import { ActivityIndicator,  Text, View, TextInput , ScrollView,StyleSheet} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {Button, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import RNTextDetector from 'react-native-text-detector';
import Overlays from './Overlays';
import {connect} from 'react-redux';

export class Camera extends Component {
    constructor(){
        super();  
        this.state ={
          anim:false
        }  
        
       
        }
    goHome =()=>{

      this.props.navigation.navigate('Home')
    }

    click = async () => {
       this.setState({anim:true});
       
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
          let content = " ";
          visionResp.forEach(element => {
             content += element.text;
          });
          console.log(content)
          this.props.camNote(content)

    ;
            } catch (e) {
          console.warn(e);
        }
         this.setState({anim:false});

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
                       
                        justifyContent: 'flex-start',
    
                    }}
                    captureAudio={false}
                >
                   
                  <Overlays/>
                  <View style={{ flex:1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                      <Icon name="md-arrow-back" onPress = { this.goHome} style = {{padding:15, alignContent:"flex-start", flex: 0, color: 'white'}} size={45} />
                      { this.state.anim &&
                      <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems:"center",}} >
                           <ActivityIndicator size='large' color="red" /> 
                     </View>}
                      <View  style={{flex:1, flexDirection:'column', justifyContent: 'flex-end', alignItems:"center",}}>
                            <Icon name="md-camera" onPress ={this.click} style = {{padding:35, flex: 0, color: 'white'}} size={65} />                   
                      </View>                 
                  </View>
                 </RNCamera>
            </View>
        )
    }
}

export default connect(null,mapDispatcherToAction)(Camera);

function mapDispatcherToAction(dispatch){
    return {
        
        camNote: (payload) => dispatch({ type: 'camNote',payload:payload }),
        
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
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  