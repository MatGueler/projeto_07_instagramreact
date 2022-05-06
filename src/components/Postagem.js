// DUNÇÃO QUE VERIFICA SE O CONTEÚDO É IMAGEM OU VIDEO
function VerificarImagemVideo(props) {

    if (props.img === '') {
        return (
            <div class="videos">

                <video muted controls="controls" autoplay="autoplay">
                    <source src={props.mp4} type="video/mp4" />
                    <source src={props.ogg} type="video/ogv" />
                    Seu navegador não suporta vídeos.
                </video>

            </div>
        )
    }
    else {
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
                <VerificarImagemVideo img={props.imagePost} mp4={props.mp4} ogg={props.ogg} />
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

export default function Postagem() {
    const objetos = [
        { imagePerfil: 'https://st2.depositphotos.com/32749688/42863/i/1600/depositphotos_428634632-stock-photo-graffiti-artist-posing-front-his.jpg', user: 'leografiteiro1987', imagePost: 'https://c.pxhere.com/photos/39/7b/panorama_copyright_see_no_feel_archive_free_commercial-338422.jpg!d', curtidas: '122.000', mp4: '', ogg: '' },

        { imagePerfil: 'https://blog.unis.edu.br/hubfs/como-esta-o-mercado-para-um-analista-e-desenvolvedor-de-sistemas.png', user: 'luke', imagePost: 'https://c.pxhere.com/photos/6e/87/aerial_beverage_coffee_computer_contemporary_cup_desk_device-1523041.jpg!d', curtidas: '270.564', mp4: '', ogg: '' },

        { imagePerfil: 'https://meunegocio.uol.com.br/blog/wp-content/uploads/2020/04/profissao-fotografo-tudo-o-que-voce-precisa-saber-para-ser-fotografo-profissional.jpg', user: 'jao.fotografias', imagePost: 'https://c.pxhere.com/photos/bd/d6/canon_flash_foliage_heart_instagram_leaf_love_photography-1032519.jpg!d', curtidas: '9.000', mp4: '', ogg: '' },

        { imagePerfil: 'https://www.estilosugar.com/wp-content/uploads/2018/05/viagens-estilosugar.jpg', user: 'world.travels', imagePost: 'https://www.eurodicas.com.br/wp-content/uploads/2018/11/tudo-sobre-a-franca.jpg', curtidas: '985.500', mp4: '', ogg: '' },

        { imagePerfil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png', user: 'iloveparis', imagePost: 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2021/10/viajar-para-franca.jpg?fit=750%2C500&ssl=1', curtidas: '650.450', mp4: '', ogg: '' },

        { imagePerfil: 'https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/11/114/114306/animal_logo_preview3-o.jpg?1400525576', user: 'nature', imagePost: '', curtidas: '2.600.000', mp4: './video/video.mp4', ogg: './video/video.ogv' }
    ]
    return (
        <div class="principal">

            <div class="postagens">

                {objetos.map(function (elemento) {
                    return (<ConteudoPost imagePerfil={elemento.imagePerfil} user={elemento.user} imagePost={elemento.imagePost} curtidas={elemento.curtidas} mp4={elemento.mp4} ogg={elemento.ogg} />)
                })}

            </div>
        </div>

    )
}