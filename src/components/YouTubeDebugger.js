// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                    }
                }
        }
    }
    
    handleClickBitrate = () => {
        this.setState({
           setting: {
               ...this.state.setting,
               bitrate: 12
           } 
        })
    }

    handleChangeResolution = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
        });

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleClickBitrate}>Bitrate</button>
                <button className='resolution' onClick={this.handleClickResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger