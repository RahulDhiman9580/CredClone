import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//Main Router import
import { MainRouter } from './src/router';
import { persistor, store } from './src/store';

 const App = () => {

  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor} >
        <StatusBar barStyle={'light-content'}  />
        <MainRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({

});

