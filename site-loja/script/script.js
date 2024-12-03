const imagens = document.querySelectorAll('.slidesImages')
const slide = document.querySelector('#imagens')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
let atualSlide = 0

function mostarSlide(index){
    slide.innerHTML = `<img src="${imagens[index].src}"> `
}

mostarSlide(atualSlide)

next.addEventListener('click',function(){
    atualSlide = (atualSlide + 1)% imagens.length
    mostarSlide(atualSlide)
})

previous.addEventListener('click', () => {
    atualSlide = (atualSlide - 1 + imagens.length) % imagens.length;
    mostarSlide(atualSlide);
});


 const camisas = [
    {name: 'Barcelona I 24/25', url: '../link-camisa/barcelona1.html', image: '../imagens/NIKE - Barcelona 1 2024-25.png', preco: 400.00, valor: 'R$399,99', img: './imagens/NIKE - Barcelona 1 2024-25.png'},
    {name: 'Alemanha I 24/25', url: '../link-camisa/adidas-alemanha.html', image: '../imagens/ADIDAS Alemanha I-1.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/ADIDAS Alemanha I-1.png'},
    {name: 'Inter Miami 24/25', url: '../link-camisa/adidas-intermiami.html', image: '../imagens/Adidas Inter Miami 24-25.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/Adidas Inter Miami 24-25.png'},
    {name: 'Arsenal 24/25', url: '../link-camisa/adidas.arsenal.html', image: '../imagens/adidas Arsenal 24-25.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/adidas Arsenal 24-25.png' },
    {name: 'Inter Miami 24/25', url: '../link-camisa/adidas-intermiami.html', image: '../imagens/Adidas Inter Miami 24-25.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/Adidas Inter Miami 24-25.png'},
    {name: 'Holanda 24/25', url: '../link-camisa/holanda1.html', image: '../imagens/NIKE  -Holanda - 2024-25.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/NIKE  -Holanda - 2024-25.png'},
    {name: 'Corinthians I 24/25', url: '../link-camisa/corinthians.1.html', image: '../imagens/NIKE corinthians I branca.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/NIKE corinthians I branca.png'},
    {name: 'Corinthians II 24/25', url: '../link-camisa/corinthians.2.html', image: '../imagens/corinthians - NIKE 24-25.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/corinthians - NIKE 24-25.png'},
    {name: 'Estados Unidos I 24/25', url: '../link-camisa/eua_nike1.html', image: '../imagens/NIKE EUA I.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/NIKE EUA I.png'},
    {name: 'Uruguai II 24/25', url: '../link-camisa/uruguai.1_nike.html', image: '../imagens/NIKE uruguai II branca.png',  preco: 400.00, valor: 'R$399,99', img: './imagens/NIKE uruguai II branca.png'},
];



const search = document.getElementById('buscar');
const procurarBtn = document.querySelector('.procurar');
const listResult = document.querySelector('.list-results');

listResult.classList.add('none');





function pesquisar(query) {
    return camisas.filter(camisa => camisa.name.toLowerCase().includes(query.toLowerCase()));
}

localStorage.setItem("camisasArray", JSON.stringify(camisas));


function displayResult(results) {
    if (results.length > 0) {
        listResult.innerHTML = '';
        listResult.classList.remove('none');
      

        localStorage.setItem('camisasExport', JSON.stringify(results));

        results.forEach(element => {
            const div = document.createElement('div');
            div.classList.add('camisa-pesquisa');

            const img = document.createElement('img');
            img.src = element.img;

            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;

            const p = document.createElement('p');
            p.textContent = element.valor || 'Preço não disponível';

            div.appendChild(img);
            div.appendChild(a);
            div.appendChild(p);

            div.style.cursor = 'pointer';
            div.addEventListener('click', () => {
                window.location.href = element.url;
            });



            listResult.appendChild(div);
        });
    } else {
        listResult.classList.add('none');
         
    }
}

function result() {
    const query = search.value.trim();
    if (query !== '') {
        const filteredResults = pesquisar(query);
        displayResult(filteredResults);
    } else {
        listResult.classList.add('none');
    }
}

search.addEventListener('input', result);

procurarBtn.addEventListener('click', () => {
    result();
    if (listResult.children.length > 0) {
        window.location.href = `./result/results.html?search=${input}`;
    }
});

search.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const input = search.value;
        result();
        if (listResult.children.length > 0) {
            window.location.href = `./result/results.html?search=${input}`;
        }
    }
});


document.querySelectorAll('.camisa').forEach(camisa => {
    camisa.addEventListener('mouseover', () => {
        camisa.style.border = '3px solid red';
    });

    camisa.addEventListener('mouseout', () => {
        camisa.style.border = ' 3px solid #121211';
    });
});

const initSlider = (selector) => {
    const sliderWrapper = document.querySelector(selector);
    const imageList = sliderWrapper.querySelector(".image-list");
    const slideButtons = sliderWrapper.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

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

    // Update button visibility on load and when scrolling
    imageList.addEventListener("scroll", handleSlideButtons);
    handleSlideButtons(); // Initial check on load
}

// Initialize sliders for each image-list
document.querySelectorAll('.slider-wrapper').forEach(slider => initSlider(`#${slider.id}`));

// Reinitialize on resize
window.addEventListener("resize", () => {
    document.querySelectorAll('.slider-wrapper').forEach(slider => initSlider(`#${slider.id}`));
});

const email = document.getElementById('email-newsletter');
const enter = document.getElementById('enter');
const newsletter = document.querySelector('.input-field-newsletter');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setAccept() {
    newsletter.style.border = "";
}

function setError() {
    alert('email incorreto ')
}

function validateInputs() {
    let valid = true;

    if (!emailRegex.test(email.value)) {
        setError();
        valid = false;
    } else {
        setAccept();
    }

    if (valid) {
        setTimeout(() => {
            redirectToIndex();
        }, 1000);
    }
}

function redirectToIndex() {
    window.location.href = 'index.html';
}

enter.addEventListener('click', (event) => {
    event.preventDefault();
    validateInputs();
});


const userImg = document.querySelector('.user-img');
const userUl = document.querySelector('.user-ul');


userUl.classList.add('none');


userImg.addEventListener('mouseenter', () => {
    userUl.classList.remove('none');
});

userImg.addEventListener('mouseleave', () => {
    userUl.classList.add('none');
});
