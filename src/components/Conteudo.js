function Postagem() {
    return (

        <div class="container">
            <Storie />
            <div class="principal">

                <div class="postagens">

                    {/* <Pessoas/> */}
                    <div class="postagem">
                        <div class="cabecalho">
                            <div class="perfil">

                                <div class="fundo-perfil-feed">
                                    <div class="foto-perfil-feed">
                                        <img src="https://st2.depositphotos.com/32749688/42863/i/1600/depositphotos_428634632-stock-photo-graffiti-artist-posing-front-his.jpg" />
                                    </div>
                                </div>

                                <p>leografiteiro1987</p>
                            </div>
                            <div class="opcoes">
                                <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="postada">
                            <img src="https://c.pxhere.com/photos/39/7b/panorama_copyright_see_no_feel_archive_free_commercial-338422.jpg!d" />
                        </div>

                        <div class="rodape">
                            <div class="menu-foto">
                                <div class="icone-curtir-comentar-enviar">
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>

                                <div class="icone salvar"><ion-icon name="bookmark-outline"></ion-icon></div>

                            </div>
                            <div class="curtidas">

                                <div class="perfil-curtidas">
                                    <img src="https://raichu-uploads.s3.amazonaws.com/logo_null_y6Bzzu.png" />
                                </div>

                                <p>Curtido por <strong>respondeai</strong> e <strong>122.000 pessoas</strong>.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}

function PessoaStorie(props) {
    return (

        // <Pessoa imagem = 'http://2.bp.blogspot.com/-Cgy-zCZPOOY/U65DujjsiAI/AAAAAAAACac/w59bDHceGK4/s1600/BILLY+FROM+GRIM+ADVENTURES+OF+BILLY+AND+MANDY.png' name = 'billy'/>

        <div class="conteudo-storie">

            <div class="fundo-storie">
                <div class="foto-perfil-storie">
                    <img src={props.imagem} />
                </div>
            </div>
            <div class="nome-perfil">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

function Storie() {
    const objetos =
        [
            {
                imagem: 'http://2.bp.blogspot.com/-Cgy-zCZPOOY/U65DujjsiAI/AAAAAAAACac/w59bDHceGK4/s1600/BILLY+FROM+GRIM+ADVENTURES+OF+BILLY+AND+MANDY.png', name: 'billy'
            },
            {
                imagem: 'https://us-east-1.tchyn.io/snopes-production/uploads/2014/04/edu_astronauts.jpg', name: 'astro.nauta'
            },
            {
                imagem: 'https://infodiretas.com/wp-content/uploads/2013/12/todo-mundo-odeia-o-chris1.jpg', name: 'crhis'
            },
            {
                imagem:'https://i.pinimg.com/736x/b7/a5/ff/b7a5ff972511607ba23dc3ed543fd8a5--shrek-donkey-donkeys.jpg', name:'burro'
            },
            {
                imagem:'https://pngimg.com/uploads/shrek/shrek_PNG4.png', name:'shrek'
            },
            {
                imagem: 'https://st2.depositphotos.com/32749688/42863/i/1600/depositphotos_428634632-stock-photo-graffiti-artist-posing-front-his.jpg', name: 'astro.nauta'
            },
            {
                imagem: 'https://us-east-1.tchyn.io/snopes-production/uploads/2014/04/edu_astronauts.jpg', name: 'leografiteiro1987'
            },
            {
                imagem: 'https://blog.unis.edu.br/hubfs/como-esta-o-mercado-para-um-analista-e-desenvolvedor-de-sistemas.png', name: 'luke'
            },
            { imagem: 'https://www.nacionflix.com/__export/1618245840672/sites/debate/img/2021/03/27/chris-hemsworth-thor-01.jpg_242310155.jpg', name: 'thor' }
        ]

    return (
        <div class="principal">
            <div class="menu-stories">

                <div class="seta-stories">
                    <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                </div>


                {objetos.map(function (elemento) {
                    return (<PessoaStorie imagem={elemento.imagem} name={elemento.name} />)
                })}

            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="perfil-sidebar">

                <div class="fundo-storie-sidebar">
                    <div class="foto-perfil">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEpRvYzRM8Vqg/profile-displayphoto-shrink_200_200/0/1639539777921?e=1652918400&v=beta&t=VU-7DgSXSFD_vUmNUvvUCiae2T-ijIOmBmCcx-tncKI" />
                    </div>
                </div>

                <div class="nome-abreviacao-perfil">
                    <p>mattgueler</p>
                    <p class="abreviacao">Mateus</p>
                </div>
            </div>

            <div class="sugestao">

                <div class="sugestoes-para-voce"><p>Sugestões para você</p></div>

                <div class="ver-tudo"><p>Ver tudo</p></div>

            </div>

            <div class="perfis">

                <div class="caixa-perfil">
                    <div class="perfil">

                        <div class="fundo-storie-sugestoes">
                            <div class="foto-perfil">
                                <img src="https://images.alphacoders.com/606/thumb-1920-606152.jpg" />
                            </div>
                        </div>

                        <div class="nome-abreviacao-perfil">
                            <p>joaquimduBI</p>
                            <p class="abreviacao">Segue você </p>
                        </div>

                    </div>
                    <div class="seguir">
                        <p>seguir</p>
                    </div>
                </div>

                <div class="caixa-perfil">
                    <div class="perfil">

                        <div class="fundo-storie-sugestoes">
                            <div class="foto-perfil">
                                <img src="https://www.collinsdictionary.com/images/full/dog_230497594.jpg" />
                            </div>
                        </div>

                        <div class="nome-abreviacao-perfil">
                            <p>dogger</p>
                            <p class="abreviacao">Segue você </p>
                        </div>

                    </div>
                    <div class="seguir">
                        <p>seguir</p>
                    </div>
                </div>

                <div class="caixa-perfil">
                    <div class="perfil">

                        <div class="fundo-storie-sugestoes">
                            <div class="foto-perfil">
                                <img src="https://78.media.tumblr.com/236b4f7039f320db4f740b56657780ee/tumblr_inline_paec5d3r7M1vt5b9r_1280.png" />
                            </div>
                        </div>

                        <div class="nome-abreviacao-perfil">
                            <p>elimar</p>
                            <p class="abreviacao">Segue você </p>
                        </div>

                    </div>
                    <div class="seguir">
                        <p>seguir</p>
                    </div>
                </div>

                <div class="caixa-perfil">
                    <div class="perfil">

                        <div class="fundo-storie-sugestoes">
                            <div class="foto-perfil">
                                <img src="https://img.quizur.com/f/img5db1c0cc09c081.22556755.jpg?lastEdited=1571930321" />
                            </div>
                        </div>

                        <div class="nome-abreviacao-perfil">
                            <p>KND</p>
                            <p class="abreviacao">Segue você </p>
                        </div>

                    </div>
                    <div class="seguir">
                        <p>seguir</p>
                    </div>
                </div>

                <div class="caixa-perfil">
                    <div class="perfil">

                        <div class="fundo-storie-sugestoes">
                            <div class="foto-perfil">
                                <img src="http://2.bp.blogspot.com/-6MKeenTU60A/VGkmquE5BvI/AAAAAAAAEoU/tj9z5V0wKXY/s1600/Kick_Butovisk_06.png" />
                            </div>
                        </div>

                        <div class="nome-abreviacao-perfil">
                            <p>buttovisk</p>
                            <p class="abreviacao">Segue você</p>
                        </div>

                    </div>
                    <div class="seguir">
                        <p>seguir</p>
                    </div>
                </div>

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

export default function Conteudo() {
    return (
        <Postagem />
    )
}