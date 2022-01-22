import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:`https://bitsofco.de/content/images/2018/12/broken-1.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}.....</p>
                    <a href="/newsDetail" className="btn btn-primary btn-sm" href={newsUrl} target="_blank">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItem;
