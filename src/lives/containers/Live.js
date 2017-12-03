import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

import { Colors, Metrics } from 'App/Themes'
import { connect } from 'react-redux'
import LiveActions from 'App/Redux/LiveRedux'
import { Icon, Image, Screen, ListView, Tile, Title, Subtitle, Divider, Heading, Caption, Video } from '@shoutem/ui';
import _ from 'lodash'

// Styles
import styles from 'App/Containers/Live/Styles/LiveStyle'




class Live extends React.Component {

  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this);

  }

  componentDidMount () {
    this.props.getLivesRequest()
  }

  renderRow(live) {
    //     <Video
    //  source={{ uri: 'https://www.youtube.com/watch?v=B--D0eWkJ9s&feature=iv&src_vid=kps2HtNKR8U&annotation_id=channel%3A5901443b-0000-25fa-b412-94eb2c059ef0' }}
    //  height={200}
      //width={300}
  ///>
    return (
      <View>



<Icon name="add-event" />
          <Tile>

        <Image
          styleName="large-banner"
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn3D_jsGypbU8axUNoxbZuxAM5ociQdcot3f0NeOpNZUmKzM0' }}
        >



<Title styleName="bold"> {live.date} </Title>
<Title styleName="md-gutter-bottom bold">{live.teamHome} - {live.teamAway}</Title>
      <Caption style={{color: 'black',}}>Match de gros batards</Caption>

        </Image>

          </Tile>
      </View>

    );
  }




  render () {
      console.tron.log(this.props)
      //<Title style={{fontSize: 22, color:'red'}} >Liste des lives</Title>

    return (
      <View style={{flex: 1}}>
      <View style={{height:100,paddingTop:40}}>
        <Tile styleName="text-centric" style={{paddingBottom:0}}>
          <Title  >RIS-ORANGIS Phenix</Title>
          <Caption>Tous les lives</Caption>
        </Tile>
      </View>
        <ScrollView style={styles.Container}>

          <View style={styles.container}>
            {this.props.error && <Text style={{ color: 'red'}}>Il y a une erreur</Text> }


            <ListView
              data={_.values(this.props.lives)}
              renderRow={this.renderRow}
            />
          </View>

        </ScrollView>
      </View>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    lives: state.live.lives,
    error: state.live.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLivesRequest: () => dispatch(LiveActions.getLivesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Live)
