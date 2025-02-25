import './article_snip.css';
import ComponentBox from '../componentbox/componentbox';
import React, { useEffect, useState } from 'react';
import { MathJax } from "better-react-mathjax";


export function RenderXML({file}) {
    const [xmlData, setXmlData] = useState(null);

    useEffect(()=>{
        if(file ){
            fetch(file).then( r => r.text())
            .then(
                (xmltext) => {
                    console.log(xmltext)
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmltext, "text/xml");
                    const title = xmlDoc.getElementsByTagName('title')[0]?.textContent || 'Default Title';
                    const time = xmlDoc.getElementsByTagName('date')[0]?.textContent || 'Default Time';
                    const text = xmlDoc.getElementsByTagName('text')[0]?.textContent || 'Default Text';

                    setXmlData({ title, time, text });
                }
            )
        }
    },[file])
    
    
    return (
        <div>
            {xmlData && <ArticleSnip title={xmlData.title} time={xmlData.time} text={xmlData.text} />}
        </div>
    );
}

export function ArticleSnip({title,time,text}){
    return (
        <ComponentBox 
          inside_text={
            <div className="articlesnip">
                <div className="sub-text"> Written on: {time} </div>
                <div className="title"> {title} </div>
                <div>
                    <MathJax>
                        {text}
                    </MathJax>
                </div>
            </div>
          }
        />
    )
}

export default ArticleSnip;

