// FUNÇÕES QUE MONTAM O SIDEBAR
function PessoaSidebar(props) {
    return (
        <div class="caixa-perfil">
            <div class="perfil">

                <div class="fundo-storie-sugestoes">
                    <div class="foto-perfil">
                        <img src={props.image} />
                    </div>
                </div>

                <div class="nome-abreviacao-perfil">
                    <p>{props.name}</p>
                    <p class="abreviacao">Segue você </p>
                </div>

            </div>
            <div class="seguir">
                <p>seguir</p>
            </div>
        </div>

    )
}

function MeuPerfilSidebar(props) {
    return (
        <div class="perfil-sidebar">

            <div class="fundo-storie-sidebar">
                <div class="foto-perfil">
                    <img src={props.image} />
                </div>
            </div>

            <div class="nome-abreviacao-perfil">
                <p>{props.user}</p>
                <p class="abreviacao">{props.name}</p>
            </div>
        </div>
    )
}

export default function Sidebar() {
    const objetos = [
        { image: 'https://images.alphacoders.com/606/thumb-1920-606152.jpg', name: 'joaquimduBI' },
        { image: 'https://www.collinsdictionary.com/images/full/dog_230497594.jpg', name: 'dogger' },
        { image: 'https://78.media.tumblr.com/236b4f7039f320db4f740b56657780ee/tumblr_inline_paec5d3r7M1vt5b9r_1280.png', name: 'elimar' },
        { image: 'https://img.quizur.com/f/img5db1c0cc09c081.22556755.jpg?lastEdited=1571930321', name: 'KND' },
        { image: 'http://2.bp.blogspot.com/-6MKeenTU60A/VGkmquE5BvI/AAAAAAAAEoU/tj9z5V0wKXY/s1600/Kick_Butovisk_06.png', name: 'buttovisk' }
    ]
    return (
        <div class="sidebar">
            <MeuPerfilSidebar image='https://media-exp1.licdn.com/dms/image/C4E03AQEpRvYzRM8Vqg/profile-displayphoto-shrink_200_200/0/1639539777921?e=1652918400&v=beta&t=VU-7DgSXSFD_vUmNUvvUCiae2T-ijIOmBmCcx-tncKI' user='mattgueler' name='Mateus' />

            <div class="sugestao">

                <div class="sugestoes-para-voce"><p>Sugestões para você</p></div>

                <div class="ver-tudo"><p>Ver tudo</p></div>

            </div>

            <div class="perfis">

                {objetos.map(function (elemento) {
                    return (<PessoaSidebar image={elemento.image} name={elemento.name} />)
                })}
            </div>

            <div class="alertas">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>

                <p>
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
            </div>

        </div>
    )
}