import './article_snip.css';

export function RenderXML(){
    

}

function ArticleSnip({title,time,text}){
    return (
        <div className="articlesnip">
            <div className="sub-text"> Written on: {time} </div>
            <div className="title"> {title} </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default ArticleSnip;

