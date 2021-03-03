

import './TopHeader.css';
import {Jumbotron, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeader = () => {
    const [news, setNews] = useState([])
    useEffect( ()=>{
        const url = `
        http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=c2021bd94de742ec9d209f7f22155871`
        
        fetch(url)
        .then( res => res.json())
        .then ( data => setNews(data.articles))
    },[])
    
    return (
        <div className="mt-5">
            <h2> total-News {news.length}</h2>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            {
               news.map( article => <News article={article}></News> )
            }
        </div>
    );
};

export default TopHeader;