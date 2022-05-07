export default function Cabecalho(props) {
    return (
        <div class="cabecalho">
            <div class="perfil">

                <div class="fundo-perfil-feed">
                    <div class="foto-perfil-feed">
                        <img src={props.imagePerfil} />
                    </div>
                </div>

                <p>{props.user}</p>
            </div>
            <div class="opcoes">
                <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
            </div>
        </div>
    )
}