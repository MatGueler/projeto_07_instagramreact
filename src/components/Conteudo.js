import Postagem from "./Postagem";
import Storie from "./Stories";
import Sidebar from "./Sidebar";

// FUNÇÃO QUE EXPORTA O CONTEÚDO TOTAL
export default function Conteudo() {
    return (
        <div class = 'container'>
            <Storie />
            <Postagem />
            <Sidebar/>
        </div>
    )
}