import React from 'react';


export default class SearchComponent extends React.Component{
constructor(){
super();

this.passSource=this.passSource.bind(this);
}

passSource(){
console.log("passSource");
var searchStr=document.getElementById("searchId").value;
this.props.newsSource(searchStr);

}
render(){

return(
    <div className="searchBar">
            <div className="col_12">

            </div>

        <div className="col_12">

            <div>
            </div>

            <div className="col_12">
                <input type="text" className="form-control" name="search here" id ="searchId"/>
            </div>

            <div>
            <input type="button" className="btn-primary" id ="btn" value="Search" onClick={this.passSource}/>
            </div>
        </div>


    </div>

        )
    }

}
