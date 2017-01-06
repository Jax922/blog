/**
 * Created by metrokobe on 2016/12/26.
 */
import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';



class ArticleIntro extends React.Component {

    render(){
        const {} = this.props;
        return (
            <Card style={{width: '50%'}}>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="http://www.material-ui.com/images/jsa-128.jpg"
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        )
    }
}

export default ArticleIntro ;