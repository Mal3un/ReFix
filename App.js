import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from './app.component.style.js';
import Header from './components/header/index.js';
import Slider from './components/slider/index.js';
import JobList from './components/joblist/index.js';
import FixHis from './components/fixHis/index.js';
import Menu from './components/Menu/index.js';
import Login from './src/view/login/index.js';
import Welcome from './src/view/welcome/index.js';
import Profile from './src/view/profile/index.js';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome />
      <Login />
      <Profile />
      <ScrollView style={styles.scrollView}>
        <Header />
        <Slider />
        <JobList />
        <FixHis />
      </ScrollView>
      <Menu /> */}
    </View>
  );
}


