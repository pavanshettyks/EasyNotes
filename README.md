# EasyNotes


Application use RNCamera and OCR to click the photo of notes and converts it into text file. 
The final objective the project is the ease the process of notes taking.

Application uses Redux to take care of the states. 

Stay Tuned

### Let's Get Started with Installation

Install Redux `npm install --save redux`

Install Redux for react `npm install --save react-redux`

Install logger `npm install redux-logger`

Install React Navigation

 ` npm install --save react-navigation `

 ` npm install --save react-native-gesture-handler`

 ` react-native link react-navigation` 

 ` react-native link react-native-gesture-handler`

Install and React Native camera:

` npm install --save react-native-camera `

`  react-native link react-native-camera `


Installl and link React Native text detector

`npm install react-native-text-detector --save `

`react-native link react-native-text-detector `



###############################

### Errors and resolvation stratergy :
    
#####  1. React Native Camera issue

    ```
     Could not resolve project :react-native-camera.
     Required by:
         project :app
      > Cannot choose between the following variants of project :react-native-camera:
          - generalDebugRuntimeElements
          - mlkitDebugRuntimeElements
    ```
#####  solution: goto -> android -> build.gradle

    ```
    android {
         ....
    defaultConfig {
        ....
        missingDimensionStrategy 'react-native-camera', 'general'  //add this line
    ```
..................................................................................................




#########################
https://blog.nativebase.io/text-recognition-app-using-react-native-3537ccecda6  

https://www.coursera.org/learn/algorithms-divide-conquer  

https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b ---> forms

https://reactnativeexample.com/react-native-accordion-collapse-component/  --> collapse

https://reactnativeexample.com/easy-react-native-layout-grid-for-the-dumb/ ---> grid

https://github.com/taehyunlim/reactnd-flashcards/blob/master/utils/api.js ---> build this
###################################

yarn add react-native-text-detector

yarn add react-native-camera


Add
new RNCameraPackage(),
new RNTextDetectorPackage() in MainApplication.java under    
 protected List<ReactPackage> getPackages()


 https://www.toptal.com/react-native/react-native-camera-tutorial


 react-native link react-native-fs
 npm install --save accordion-collapse-react-native
 react-native link accordion-collapse-react-native
