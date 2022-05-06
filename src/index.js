import ReactDOM from "react-dom";

import Conteudo from "./components/Conteudo";
import Topo from "./components/Topo";

function App() {
    return (
        <div>
            <Topo/>
            <Conteudo/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
