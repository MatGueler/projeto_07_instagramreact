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

export default function Storie() {
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