/**
 * Created by metrokobe on 2016/12/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bar from '../components/Bar.jsx';
import ArticleIntro from '../components/ArticleIntro.jsx';

class Home extends React.Component{
    render(){
        return <MuiThemeProvider>
            <div>
                <Bar />
                <ArticleIntro />
            </div>
        </MuiThemeProvider>
    }
}
ReactDom.render(<Home />, document.getElementById('main'));



