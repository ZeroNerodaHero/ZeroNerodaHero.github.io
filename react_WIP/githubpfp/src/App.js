import backgroundImage from './res/background.gif';
import ComponentBox from './components/componentbox/componentbox';
import {ArticleSnip, RenderXML }from './components/article_snip/article_snip';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import './App.css';
import EconNotes from './res/Notes/2025_2_20_Econ.xml'
import Abstract from './res/Notes/2025_2_23_Abstract.xml'
import ATMNotes from './res/Notes/2025_2_24_ATM.xml'

function App() {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  }
  return (
    <MathJaxContext>
      <div className="App" style={style}>
        <ComponentBox inside_text={
          <div>
            <div className="header">Hello, Da Blog</div>
            <div className="sub-text">This is where i write about things</div>
          </div>
        } />
        <RenderXML file={ATMNotes}/>
        <RenderXML file={Abstract}/>
        <RenderXML file={EconNotes}/>
        <ArticleSnip title={"Hello first post"} time={"2-20-2025"} text={
            <div>
              "Its lowkey my birthday!" 
              <MathJax>{"\\(e^{i\\theta}=cos(\\theta)+isin(\\theta)\\)"}</MathJax>
            </div>
          }
        />
      </div>
    </MathJaxContext>
  );
}

export default App;
