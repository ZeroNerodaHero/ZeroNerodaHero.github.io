import backgroundImage from './res/background.gif';
import './App.css';
import ComponentBox from './components/componentbox/componentbox';
import ArticleSnip from './components/article_snip/article_snip';
import { MathJax, MathJaxContext } from "better-react-mathjax";

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

        <ComponentBox 
          inside_text={<ArticleSnip title={"Hello first post"} time={"2-20-2025"} text={
            <div>
              "Its lowkey my birthday!" 
              <MathJax>{"\\(e^{i\\theta}=cos(\\theta)+isin(\\theta)\\)"}</MathJax>
            </div>
          }/>}
        />
      </div>
    </MathJaxContext>
  );
}

export default App;
