import React from 'react';
import {Link} from '@reach/router'

class SearchInput extends React.Component {
    state = { 
        searchTerm: ''
     }
     render() { 
        console.log(this.props)
        return ( 
            <div>
            <p>Search : </p>
                <input value={this.state.searchTerm} onChange={this.handleSubmit} />
                <div>{this.props.articles.reduce((acc, articleData)=> {
                                  
                   if(articleData.title && articleData.title.includes(this.state.searchTerm)) {
                        acc.push(<div key={articleData._id}><h3>{articleData.title}</h3>
                                <p>{articleData.body}</p>
                                {/* {console.log(articleData.created_by.username)} */}
                                <p>{articleData.created_by.username}</p>
                                <strong><p><img src={articleData.created_by.avatar_url} alt="avatar" /></p></strong>
                                <button className="articlesBtn"><Link to={`${articleData._id}`}>Read More</Link></button>
                                </div>)
                    }
                    return acc;
                }, [])}</div>
                {/* <button >Submit</button> */}
            </div>
         );
    }
    handleSubmit = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
}
 
export default SearchInput;