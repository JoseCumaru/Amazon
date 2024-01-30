const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



//modal
function acao(nome){
    let extern_modal = document.querySelector('.extern_modal')
    let modal = document.querySelector('.modal')
    

    extern_modal.style.display = 'block';
    modal.style.display = 'block';
    modal.style.zIndex = '2';

    setContent(nome);

     // event listener para impedir o fechamento do modal quando clicado
     modal.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede a propagação do evento de clique para o elemento pai (extern_modal)
    });
}

function fechar(){
    let extern_modal = document.querySelector('.extern_modal')
    let modal = document.querySelector('.modal')

    extern_modal.style.display = 'none';
    modal.style.display = 'none';
    modal.style.zIndex = '';

    // Limpa o conteúdo do modal ao fechar
    modalContent.innerHTML = '';
}



function setContent(nome){
    let modalContent = document.getElementById('modal-content');

    if(nome=='arara'){
       modalContent.innerHTML = `
        <h1>${'Arara-Vermelha'}</h1>
        <p>${'As araras possuem características muito únicas e cada uma com sua particularidade. As araras vermelhas são o segundo maior psitacídeo do país e podem chegar a medir 95 centímetros, chegando a pesar, mais ou menos, 1,5kg. Além disso, é uma ave extremamente chamativa, com sua plumagem em um vermelho vivo, asa mescla as cores vermelho, azul e verde, cauda alongada e vocalização forte e alta. Ainda, apresenta, em sua face, a pele nua, com algumas linhas finas de pequenas peninhas vermelhas. <br><br>As araras vermelhas (Ara chloroptera) possuem ampla distribuição. Elas são aves da Mata Atlântica encontradas nos estados da Bahia, Minas Gerais e São Paulo, mas também nas regiões norte, centro-oeste e hoje são muito encontradas no Mato Grosso do Sul, sendo muito bem observadas e claro, onde o Instituto Arara Azul realiza suas pesquisas com estes animais. <br><br>Sua alimentação é baseada em frutos e sementes, além de outras partes da planta, como brotos e flores. É  bastante generalista, as espécies de frutos e sementes podem variar bastante já que sua distribuição é bastante ampla. '}</p>
        <!-- Adicione mais informações conforme necessário -->
        `;
    }else if(nome=='onça'){
        modalContent.innerHTML = `
        <h1>${'Onça-Pintada'}</h1>
        <p>${'A onça-pintada (português brasileiro) ou jaguar (português europeu) (nome científico: Panthera onca), também conhecida como onça-preta (no caso dos indivíduos melânicos), é uma espécie de mamífero carnívoro da família dos felídeos (Felidae) encontrada nas Américas. É o terceiro maior felino do mundo, após o tigre e o leão, e o maior do continente americano. Apesar da semelhança com o leopardo (Panthera pardus), a onça-pintada é evolutivamente mais próxima do leão (Panthera leo). Ocorre desde o sul dos Estados Unidos até o norte da Argentina, mas está extinta em diversas partes dessa região atualmente. Nos Estados Unidos, por exemplo, está quase extinta desde o início do século XX, mas ainda ocorre em algumas áreas do Arizona, Novo México e Texas. É encontrada principalmente em ambientes de florestas tropicais, e geralmente não ocorre acima dos 1 200 m de altitude. A onça-pintada está fortemente associada à presença de água e é notável como um felino que gosta de nadar. É um felino de porte grande, com peso variando de 56 a 92 quilos, podendo chegar a 158 quilos, e comprimento variando de 1,12 a 1,85 m sem a cauda, que é relativamente curta. Fisicamente semelhante ao leopardo, dele se diferencia pelo padrão de manchas na pele e pelo maior tamanho. Existem indivíduos totalmente pretos. As onças pintadas possuem mandíbulas excepcionalmente fortes, apresentando as mais poderosas mordidas dentre todos os grandes felinos. Isso permite que ela fure a casca dura de répteis como a tartaruga e de utilizar um método de matar incomum: ela morde diretamente através do crânio da presa entre os ouvidos, uma mordida fatal no cérebro'}</p>
        <!-- Adicione mais informações conforme necessário -->
        `;
    }else if(nome=='capivara'){
        modalContent.innerHTML = `
        <h1>${'Capivara'}</h1>
        <p>${'A capivara ou capincho (nome científico: Hydrochoerus hydrochaeris) é uma espécie de mamífero roedor da família Caviidae e subfamília Hydrochoerinae. Alguns autores consideram que deva ser classificada em uma família própria. Está incluída no mesmo grupo de roedores ao qual se classificam as pacas, cutias, os preás e o porquinho-da-índia. Ocorre por toda a América do Sul ao leste dos Andes em habitats associados a rios, lagos e pântanos, do nível do mar até 1 300 m de altitude. Extremamente adaptável, pode ocorrer em ambientes altamente alterados pelo ser humano.<br><br>É o maior roedor do mundo, pesando até 91 kg e medindo até 1,2 m de comprimento e 60 cm de altura. A pelagem é densa, de cor avermelhada a marrom escuro. É possível distinguir os machos por conta da presença de uma glândula proeminente no focinho apesar de o dimorfismo sexual não ser aparente. Existe uma série de adaptações no sistema digestório à herbivoria, principalmente no ceco. Alcança a maturidade sexual com cerca de 1,5 ano de idade, e as fêmeas dão à luz geralmente a quatro filhotes por vez, pesando até 1,5 kg e já nascem com pelos e dentição permanente. Em cativeiro, pode viver até 12 anos de idade.'}</p>
        <!-- Adicione mais informações conforme necessário -->
        `;
    }else if(nome=='tucano'){
        modalContent.innerHTML = `
        <h1>${'Tucano'}</h1>
        <p>${'Os tucanos são aves que correspondem à família Ramphastidae, vivem nas florestas tropicais da América Central e América do Sul. A família inclui cinco gêneros e mais de quarenta espécies diferentes. Possuem bicos notavelmente grandes e coloridos, que possuem a função de termorregulação para as muitas espécies que passam muito tempo na copa da floresta exposta ao sol tropical quente.<br><br>São aves arborícolas restritas aos neotrópicos, sendo encontradas desde o México até o Brasil. Algumas espécies habitam florestas tropicais úmidas de baixa altitude, enquanto outras habitam bosques mais temperados, em cordilheiras, a altitudes de até 3000 m.'}</p>
        <!-- Adicione mais informações conforme necessário -->
        `; 
    }else if(nome=='arara_azul'){
        modalContent.innerHTML = `
        <h1>${'Arara-Azul'}</h1>
        <p>${'A arara-azul é uma espécie de arara que se destaca pela beleza de suas penas azul-cobalto e por seu tamanho, sendo a maior espécie do grupo dos psitacídeos. <br><br>"A arara-azul, também chamada arara-azul-grande, é uma espécie de ave, encontrada no Brasil, que se caracteriza por ser a maior entre os psitacídeos (família Psittacidae), chegando a atingir mais de um metro de comprimento, medindo-se da ponta do bico à ponta da cauda. Essa espécie habita diferentes formações vegetais, sendo encontrada em formações savânicas e até em ambientes de floresta no Brasil, Paraguai e Bolívia. As maiores populações dessa espécie de arara são encontradas no Pantanal.'}</p>
        <!-- Adicione mais informações conforme necessário -->
        `; 
    }else if(nome=='jacaré'){
         modalContent.innerHTML = `
        <h1>${'Jacaré'}</h1>
        <p>${'jacare'}</p>
        <!-- Adicione mais informações conforme necessário -->
        `; 
    }else if(nome=='gaviao')
    modalContent.innerHTML = `
    <h1>${'Gavião-Real'}</h1>
    <p>${'O gavião-real[3][4] (nome científico: Harpia harpyja), também chamado cutucurim, gavião-de-penacho, harpia, uiraçu, uiracuir, uiruuetê, uraçu,[5] águia-imperial-brasileira, águia-imperial ou uiraçu-verdadeiro,[6] é uma ave acipitriforme da família dos acipitrídeos (Accipitridae). É a maior e mais poderosa ave de rapina encontrada em toda a sua extensão[7] e está entre as maiores espécies de águias existentes no mundo. Geralmente habita florestas tropicais de baixa altitude na camada superior (emergente) do dossel. A destruição de seu habitat natural fez com que desaparecesse de muitas partes de seu antigo território e está quase extirpado de grande parte da América Central.<br><br>O nome específico harpyja e a palavra "harpia" no nome comum vêm do grego antigo harpyia. Referem-se às harpias da mitologia grega antiga, espíritos do vento que levavam os mortos para o Hades ou Tártaro, e diziam ter um corpo como um abutre e o rosto de uma mulher.[8] Por causa do tamanho e ferocidade do animal, os primeiros exploradores europeus da América Central nomearam-nas como harpias.'}</p>
    <!-- Adicione mais informações conforme necessário -->
    `; 
       

}

