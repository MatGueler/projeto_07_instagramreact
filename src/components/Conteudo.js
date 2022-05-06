
// DUNÇÃO QUE VERIFICA SE O CONTEÚDO É IMAGEM OU VIDEO
function VerificarImagemVideo(props){

    if(props.img===''){
        return(
        <div class="videos">
    
                        <video muted controls="controls" autoplay="autoplay">
                            <source src={props.mp4} type="video/mp4" />
                            <source src={props.ogg} type="video/ogv" />
                            Seu navegador não suporta vídeos.
                        </video>
    
                    </div>
        )
    }
    else{
        return (
            <img src={props.img} />
        )
    }
}

// FUNÇÕES QUE MONTA A POSTAGEM
function ConteudoPost(props) {

        return (

            <div class="postagem">
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
    
                <div class="postada">
                    <VerificarImagemVideo img={props.imagePost} mp4={props.mp4} ogg={props.ogg}/>
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
    
                        <p>Curtido por <strong>respondeai</strong> e <strong>{props.curtidas} pessoas</strong>.</p>
    
                    </div>
                </div>
            </div>
        )


    //     return (

    //         <div class="postagem">
    //             <div class="cabecalho">
    //                 <div class="perfil">
    
    //                     <div class="fundo-perfil-feed">
    //                         <div class="foto-perfil-feed">
    //                             <img src={props.imagePerfil} />
    //                         </div>
    //                     </div>
    
    //                     <p>{props.user}</p>
    //                 </div>
    //                 <div class="opcoes">
    //                     <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
    //                 </div>
    //             </div>
    
    //             <div class="postada">
    //                 <img src={props.imagePost} />
    //             </div>
    
    //             <div class="rodape">
    //                 <div class="menu-foto">
    //                     <div class="icone-curtir-comentar-enviar">
    //                         <ion-icon name="heart-outline"></ion-icon>
    //                         <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
    //                         <ion-icon name="paper-plane-outline"></ion-icon>
    //                     </div>
    
    //                     <div class="icone salvar"><ion-icon name="bookmark-outline"></ion-icon></div>
    
    //                 </div>
    //                 <div class="curtidas">
    
    //                     <div class="perfil-curtidas">
    //                         <img src="https://raichu-uploads.s3.amazonaws.com/logo_null_y6Bzzu.png" />
    //                     </div>
    
    //                     <p>Curtido por <strong>respondeai</strong> e <strong>{props.curtidas} pessoas</strong>.</p>
    
    //                 </div>
    //             </div>
    //         </div>
    //     )

    }

function Postagem() {
    const objetos = [
        { imagePerfil: 'https://st2.depositphotos.com/32749688/42863/i/1600/depositphotos_428634632-stock-photo-graffiti-artist-posing-front-his.jpg', user: 'leografiteiro1987', imagePost: 'https://c.pxhere.com/photos/39/7b/panorama_copyright_see_no_feel_archive_free_commercial-338422.jpg!d', curtidas: '122.000', mp4:'',ogg:'' },

        { imagePerfil: 'https://blog.unis.edu.br/hubfs/como-esta-o-mercado-para-um-analista-e-desenvolvedor-de-sistemas.png', user: 'luke', imagePost: 'https://c.pxhere.com/photos/6e/87/aerial_beverage_coffee_computer_contemporary_cup_desk_device-1523041.jpg!d', curtidas: '270.564', mp4:'',ogg:'' },

        { imagePerfil: 'https://meunegocio.uol.com.br/blog/wp-content/uploads/2020/04/profissao-fotografo-tudo-o-que-voce-precisa-saber-para-ser-fotografo-profissional.jpg', user: 'jao.fotografias', imagePost: 'https://c.pxhere.com/photos/bd/d6/canon_flash_foliage_heart_instagram_leaf_love_photography-1032519.jpg!d', curtidas: '9.000', mp4:'',ogg:'' },

        { imagePerfil: 'https://www.estilosugar.com/wp-content/uploads/2018/05/viagens-estilosugar.jpg', user: 'world.travels', imagePost: 'https://www.eurodicas.com.br/wp-content/uploads/2018/11/tudo-sobre-a-franca.jpg', curtidas: '985.500', mp4:'',ogg:'' },

        { imagePerfil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png', user: 'iloveparis', imagePost: 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2021/10/viajar-para-franca.jpg?fit=750%2C500&ssl=1', curtidas: '650.450', mp4:'',ogg:'' },

        { imagePerfil: 'https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/11/114/114306/animal_logo_preview3-o.jpg?1400525576', user: 'nature', imagePost: '', curtidas: '2.600.000', mp4:'./video/video.mp4',ogg:'./video/video.ogv' }
    ]
    return (

        <div class="container">
            <Storie />
            <div class="principal">

                <div class="postagens">

                    {objetos.map(function (elemento) {
                        return (<ConteudoPost imagePerfil={elemento.imagePerfil} user={elemento.user} imagePost={elemento.imagePost} curtidas={elemento.curtidas} mp4={elemento.mp4} ogg={elemento.ogg}/>)
                    })}

                </div>
            </div>
            <Sidebar />
        </div>
    )
}

// FUNÇÕES QUE MONTAM OS STORIES
function PessoaStorie(props) {
    return (

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
                imagem: 'https://i.pinimg.com/736x/b7/a5/ff/b7a5ff972511607ba23dc3ed543fd8a5--shrek-donkey-donkeys.jpg', name: 'burro'
            },
            {
                imagem: 'https://pngimg.com/uploads/shrek/shrek_PNG4.png', name: 'shrek'
            },
            {
                imagem: 'https://st2.depositphotos.com/32749688/42863/i/1600/depositphotos_428634632-stock-photo-graffiti-artist-posing-front-his.jpg', name: 'leografiteiro1987'
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

function Sidebar() {
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

// FUNÇÃO QUE EXPORTA O CONTEÚDO TOTAL
export default function Conteudo() {
    return (
        <Postagem />
    )
}