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

//<View style={{height:10}}/>
var { width, height } = Dimensions.get('window');
var box_count = 3;
var box_width = width / box_count - 25;

//Icon Images 
const accessible = require('../imgs/accessible.png');
const ballotReceived = require('../imgs/ballotReceived.png');
const cspan = require('../imgs/cspan.png');
const currentElection = require('../imgs/currentElection.png');
const distElect = require('../imgs/distElect.png');
const dropBox = require('../imgs/dropBox.png');
const electionDates = require('../imgs/electionDates.png');
const maps = require('../imgs/maps.png');
const military = require('../imgs/military.png');
const myVote = require('../imgs/myVote.png');
const needBallot = require('../imgs/needBallot.png');
const pdc = require('../imgs/pdc.png');
const results = require('../imgs/results.png');
const returnDistrict = require('../imgs/returnDistrict.png');
const rockTheVote = require('../imgs/rockTheVote.png');
const sampleBallot = require('../imgs/sampleBallot.png');
const statistics = require('../imgs/statistics.png');
const tCLogoBig = require('../imgs/tCLogo-800x568.png');
const tCLogo = require('../imgs/tCLogo.png');
const topBackground = require('../imgs/topBackground.png');
const topCurrentElection = require('../imgs/topCurrent-Election.png');
const votersPamphletPng = require('../imgs/votersPamphlet.png');
const votersPamphlet = require('../imgs/votersPamphlet.svg');
const logoThurstonColor = require('../imgs/logoThurstonColor.svg');


// links as variabe for clarity
const eResults = 'http://www.co.thurston.wa.us/auditor/elections/redirects/er-redirect.htm'
const eMyVote = 'https://wei.sos.wa.gov/agency/osos/en/voters/Pages/register_to_vote.aspx'
// create a page to display all the other link and logos
const eCurrentElection = 'https://techcrunch.com/'
// This link is for map view. I'll work on it later
const eDropBox = 'https://techcrunch.com/'
const eElectionDates = 'http://www.co.thurston.wa.us/auditor/Elections/election_dates.htm'
const eDistElect = 'http://www.co.thurston.wa.us/electiondatalookup/default.aspx'
const eMaps = 'http://www.co.thurston.wa.us/auditor/Elections/precinct_maps/maps.htm'
const eCspan = 'http://www.c-span.org/series/?campaign2016&nav=candidates'
const eRockTheVote = 'http://www.rockthevote.com/get-informed/elections/'
// to display pdf, this bypass security set up of iOS
const gDoc = 'http://docs.google.com/gview?embedded=true&url='


// Tabbar icons
const face = require('../imgs/social/facebook.png');
const tweet = require('../imgs/social/twitter.png');
const insta = require('../imgs/social/instagram.png');
const utube = require('../imgs/social/youtube.png');

// TabBar URLs
const eFace = 'https://facebook.com'
const eTweet = 'https://twitter.com/TCAuditor'
const eInsta = 'https://www.instagram.com/thurstonauditor/'
const eUtube = 'https://www.youtube.com/channel/UCxORZbqlmF1kADpJAu9EIOg'



class AppSecond extends Component {
  // Create the state
  state = {
    links: [
      {title:'Votes', url: eResults, img: results },
      {title:'Votes', url: eMyVote, img: myVote },
      {title:'Votes', url: eCurrentElection , img: currentElection  },

      {title:'Votes', url: eDropBox, img: dropBox },
      {title:'Votes', url: eElectionDates, img: electionDates },
      {title:'Votes', url: eDistElect, img: distElect},

      {title:'Votes', url: eMaps, img: maps },
      {title:'Votes', url: eCspan, img: cspan },
      {title:'Votes', url: eRockTheVote, img: rockTheVote },
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
        {/*<Text style={styles.text}>{btn.title}</Text>*/}
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
            <Text style={styles.text}></Text>
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
    marginBottom: 20, 
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: box_width, 
    height: box_width,
  },
    box: {
      flex: 1
  },
    box1: {
      flex: 3,
      // backgroundColor: '#88b5fb',
      backgroundColor: '#000033',
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
      height: width,
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

