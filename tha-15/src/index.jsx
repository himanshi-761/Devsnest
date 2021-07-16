import React from 'react';
import ReactDom from 'react-dom';
const App=()=>{
    return React.createElement('div',{},React.createElement('h2',{},"Hello world from react"))
}


ReactDom.render(React.createElement(App),document.getElementById('root'));