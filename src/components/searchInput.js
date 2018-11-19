import React from 'react';
import { Link } from '@reach/router'
import PropTypes from 'prop-types';
import './SearchArticles.css'

class SearchInput extends React.Component {
    state = {
        searchTerm: ''
    }
    render() {

        const { searchTerm } = this.state
        return (
            <div>
                <p>Search Article Content: </p>
                <input value={searchTerm} onChange={this.handleSubmit} />
                <div className="searchCompleteBody">
                    <div className='individualArticleResult'>
                        {this.props.articles.reduce((acc, articleData) => {

                            if (articleData.body && articleData.body.includes(searchTerm)) {
                                acc.push(<div className='articleBodySearch' key={articleData._id}>
                                    <div>
                                        <h3>{articleData.title}</h3>
                                        <p>{articleData.body}</p>
                                    </div>

                                    <div className='createdBySearch'>
                                        <p><strong>Created By : {articleData.created_by.username}</strong></p>
                                        <strong><p><img src={articleData.created_by.avatar_url} alt="avatar" /></p></strong>
                                        <button className="articlesBtn"><Link to={`${articleData._id}`}>Read More</Link></button></div>

                                </div>)
                            }
                            return acc;
                        }, [])}</div>
                </div>

            </div>
        );
    }
    handleSubmit = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
}

SearchInput.propTypes = {
    articles: PropTypes.array,
}

export default SearchInput;