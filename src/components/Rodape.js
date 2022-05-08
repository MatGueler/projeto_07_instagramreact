// NAO ESTA FUNCIONANDO


let VALOR_INICIAL = 0;
const palavra_Inicial = "heart-outline"
const coracaoCheio = "heart"
const classeVazia = 'normal md hydrated'
const classeCurtida = 'curtida md hydrated'
let marcado = 0

export default function Rodape(props) {

    const [contador, setContador] = React.useState(VALOR_INICIAL);
    const [valor, setValor] = React.useState(palavra_Inicial);
    const [classe, setClasse] = React.useState(classeVazia);

    function contar() {
        if (contador === 0) {
            setContador(contador + 1)
            setValor(coracaoCheio)
            setClasse(classeCurtida)
            marcado = 1
        }
        else {
            setContador(contador - 1)
            setValor(palavra_Inicial)
            setClasse(classeVazia)
            marcado = 0
        }

    }

    return (
        <div class="rodape">
            <div class="menu-foto">
                <div class="icone-curtir-comentar-enviar">
                    <ion-icon class={classe} name={valor} onClick={contar}></ion-icon>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="icone salvar"><ion-icon name="bookmark-outline"></ion-icon></div>

            </div>
            <div class="curtidas">

                <div class="perfil-curtidas">
                    <img src="https://raichu-uploads.s3.amazonaws.com/logo_null_y6Bzzu.png" />
                </div>

                <p>Curtido por <strong>respondeai</strong> e <strong>{props.curtidas} pessoas</strong>.</p>

            </div>
        </div>
    )
}