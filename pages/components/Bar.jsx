/**
 * Created by metrokobe on 2016/12/26.
 */
import React from 'react';
import {AppBar} from 'material-ui';



class Bar extends React.Component {
    render(){
        return (
            <AppBar
                title="Metro Home"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Bar ;