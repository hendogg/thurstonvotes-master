// npm install --save react-navigation

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  Dimensions,
  WebView,
  Navigator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'

// Get the width of the screen, use it for width and height to make a square
var { width} = Dimensions.get('window');
var box_count = 3;
var box_width = width / box_count - 30;

// to display pdf, this bypass security set up of iOS
const gDoc = 'http://docs.google.com/gview?embedded=true&url='
// Icon images 

const registration = require('../imgs/electionDates.png');
const votersPamphlet = require('../imgs/votersPamphlet.png');
const sampleBallot = require('../imgs/sampleBallot.png');
const military = require('../imgs/military.png');
const accessible = require('../imgs/accessible.png');
const statistics = require('../imgs/statistics.png');

const eRegistration = 'http://www.co.thurston.wa.us/auditor/Elections/election_dates.htm'
const eVotersPamphlet = 'http://www.co.thurston.wa.us/auditor/elections/redirects/vp-redirect.htm'
const eSampleBallot = gDoc + 'http://www.co.thurston.wa.us/auditor/Elections/2017elections/February/sample_ballot.pdf'
const eMilitary = 'http://www.co.thurston.wa.us/auditor/Elections/voter_reg/military.htm'
const eAccessible = 'http://www.co.thurston.wa.us/auditor/elections/redirects/av-redirect.htm'
const eStatistics = gDoc + 'http://www.co.thurston.wa.us/auditor/Elections/2016elections/November/stats.pdf'




// Tabbar icons
const face = require('../imgs/social/facebook.png');
const tweet = require('../imgs/social/twitter.png');
const insta = require('../imgs/social/instagram.png');
const utube = require('../imgs/social/youtube.png');

// TabBar URLs
const eFace = 'https://www.facebook.com/Thurston-County-Auditors-Office-328306377190679/'
const eTweet = 'https://twitter.com/TCAuditor'
const eInsta = 'https://www.instagram.com/thurstonauditor/'
const eUtube = 'https://www.youtube.com/channel/UCxORZbqlmF1kADpJAu9EIOg'



class AppSecond extends Component {
  // Create the state
  state = {
    links: [
      {title:'Votes', url: eRegistration, img: registration, title: 'Registration Deadlines' },
      {title:'Votes', url: eVotersPamphlet, img: votersPamphlet, title: "Voter's Pamphlet" },
      {title:'Votes', url: eSampleBallot  , img: sampleBallot , title: 'Sample Ballot'  },

      {title:'Votes', url: eMilitary, img: military, title: 'Military & Overseas Voters' },
      {title:'Votes', url: eAccessible, img: accessible, title: 'Accessible Voting' },
      {title:'Votes', url: eStatistics , img: statistics , title: 'Statistics'},


      {title:'Votes', url: eFace, img: face, title: 'Facebook' },
      {title:'Votes', url: eInsta, img: insta, title: 'Twitter' },
      {title:'Votes', url: eTweet , img: tweet , title: 'Instagram'},
    ],
  };

// function to be called later
  onPressButton(url) {
    // Let
    const urls = Linking.openURL(url) 
    // onPressButton navigate to the url and push it to the view
    this.refs.navigator.push({ urls }); 
  }


// function to be called later
// EX5 arrow anonymous function assign it to renderButton variable
  renderButton = (btn, index) => {
    return (   
      <TouchableOpacity
        // each item in the object from the state has an 'index'
        key={index}
        // btn.url: just get the url from the state
        // btn.title: just get the title from the state
        onPress={() => this.onPressButton(btn.url)}
        style={styles.item}>
        <Image source={btn.img} style={styles.image}></Image>
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }


// on website
// style={{marginTop: 20}}
// function to be called later
  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Home url={route.url} navigator={navigator} />
      );
    }


// the main view display
    return (
      <View style={styles.box}>
          <View style={styles.box1}>
          </View>
          
          <View style={styles.box2}>
            <Image source={require('../imgs/bg/topCountyBg.png')}
                 style={styles.cover} />
          </View> 
          <View style={styles.box3}>         
            <View style={[styles.container, {flexWrap:'wrap'}]}>  
                {this.state.links.map(this.renderButton)}
            </View> 
          </View>
          

      </View>
    );
  }


// the render method of the class component
  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}


const styles = StyleSheet.create (
{
  container: {
    padding: 15,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  item:
  { width: box_width, 
    height: box_width, 
    marginBottom: 35, 
    marginTop: 10, 
  },
  text: {
    color: 'black',
    textAlign: 'center',
    paddingBottom: 15,

  },
  image: {
    width: box_width , 
    height: box_width ,
  },
    box: {
      flex: 1,
  },
  box1: 
    {
      flex: 2,
      backgroundColor: 'black',
  },
    box2: 
    {
      flex: 10,
      flexDirection: "row",
      alignItems: "stretch",
  },
    cover: 
    {
      flex: 1,
      width: null,
      height: null,
  },
    box3: {
      width: width,
      backgroundColor: '#CEE0FD',
      height: width + 60,
      paddingTop: 10,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
});

// newly added for tabbar navigartions
AppSecond.navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('../imgs/social/www.png')}
          style={[styles.tabIcon, {tintColor: 'midnightblue'}]}
        />
  
    )
  }
};

export default AppSecond;