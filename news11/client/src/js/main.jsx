import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent.jsx';
import NewsBoxComponent from './components/NewsBoxComponent.jsx';


class MainComponent extends React.Component{
constructor(){
super();
this.state={articles:[], data:"default"};

this.fetchNewsJSON=this.fetchNewsJSON.bind(this);

}

fetchNewsFromExternalAPI(source) {
var that = this;
$.ajax({
url: "https://newsapi.org/v1/articles?source="+source+"&sortBy=top&apiKey=3931448f70a249d8b30ac6d29205122d",
type: "GET",
dataType: 'JSON',

success : function(msg){
console.log(msg['articles']);
var art=msg.articles;
this.setState({articles:msg.articles});
console.log("main:: "+this.state.articles);

}.bind(this),
error: function(err){
}.bind(this)
});
}

fetchNewsJSON(source){
console.log("inside fetchNewsJSON");
console.log(source);

this.setState({data:source});
this.fetchNewsFromExternalAPI(source);
}


render(){
var d=this.state.data;
var a=this.state.articles;
return(
<div>

<SearchComponent news={a} data={d} newsSource={this.fetchNewsJSON.bind(this)}/>
<NewsBoxComponent news={a} />


</div>

)
}

}

ReactDOM.render(
<MainComponent/>,document.getElementById('content')
);
