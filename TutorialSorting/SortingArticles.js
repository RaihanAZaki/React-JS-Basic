import React from 'react';

function Articles(props) {

  const allArticles = props.articles;

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                  allArticles.map(a => {
                    return <tr data-testid="article" key={a.date}>
                            <td data-testid="article-title">{a.title}</td>
                            <td data-testid="article-upvotes">{a.upvotes}</td>
                            <td data-testid="article-date">{a.date}</td>
                           </tr>
                  })
                }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
import React from 'react';

function Articles(props) {

  const allArticles = props.articles;

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                  allArticles.map(a => {
                    return <tr data-testid="article" key={a.date}>
                            <td data-testid="article-title">{a.title}</td>
                            <td data-testid="article-upvotes">{a.upvotes}</td>
                            <td data-testid="article-date">{a.date}</td>
                           </tr>
                  })
                }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
