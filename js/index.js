window.addEventListener('load', () => {
    registerSW();
})

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}

main.className = 'inicio';
main.innerHTML =
`
    <div id="cabecalho">
        <img src="images/logo.png">
        <h1>Offeritibanos</h1>
    </div>
    <input id="buscaProdutos" placeholder="Busque produtos aqui">
    <div id="listaSetores">
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
        <span>Coisarada</span><span>Coisarada</span><span>Coisarada</span>
    </div>
`;

let autenticado = false;

function alterarBottom() {
    if (!autenticado) {
        bottom.innerHTML =
            /* <div onclick="alert('inicio')">
                <img src="images/icons/home.svg">
                <span>Início<span>
            </div> */
        `
            <div onclick="alert('instalar')">
                <img src="images/icons/instalar.svg" alt="Instalar">
                <span>Instalar<span>
            </div>
            <div onclick="autenticado = true; alterarBottom();">
                <img src="images/icons/entrar.svg" alt="Entrar">
                <span>Entrar<span>
            </div>
        `;
        bottom.style.justifyContent = 'center';
    } else {
        bottom.innerHTML =
            /* <div onclick="alert('inicio')">
                <img src="images/icons/home.svg">
                <span>Início<span>
            </div> */
        `
            <div onclick="alert('usuarios')">
                <img src="images/icons/usuarios.svg" alt="Usuários">
                <span>Usuários<span>
            </div>
            <div onclick="alert('mercados')">
                <img src="images/icons/mercado.svg" alt="Mercados">
                <span>Mercados<span>
            </div>
            <div onclick="alert('setores')">
                <img src="images/icons/setores.svg" alt="Setores">
                <span>Setores<span>
            </div>
            <div onclick="alert('produtos')">
                <img src="images/icons/produto.svg" alt="Produtos">
                <span>Produtos<span>
            </div>
            <div onclick="alert('ofertas')">
                <img src="images/icons/oferta.svg" alt="Ofertas">
                <span>Ofertas<span>
            </div>
            <div onclick="alert('instalar')">
                <img src="images/icons/instalar.svg" alt="Instalar">
                <span>Instalar<span>
            </div>
            <div onclick="autenticado = false;  alterarBottom();">
                <img src="images/icons/sair.svg" alt="Sair">
                <span>Sair<span>
            </div>
        `;
        bottom.style.justifyContent = 'normal';
    } 
}

alterarBottom();
