"use strict";
window.addEventListener('load', () => {
    const hero_data = [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Lorem Ipsum dolor amed...',
            image: 'https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Lorem Ipsum',
            subtitle: 'Lorem Ipsum dolor amed...',
            image: 'https://images.pexels.com/photos/7034524/pexels-photo-7034524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Lorem Ipsum',
            subtitle: 'Lorem Ipsum dolor amed...',
            image: 'https://images.pexels.com/photos/7034523/pexels-photo-7034523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];
    const aikohero = document.querySelector('#aikohero');
    const createHeroItem = (el) => {
        const hero_container = document.createElement('div');
        const img_bg = document.createElement('div');
        const info = document.createElement('div');
        aikohero === null || aikohero === void 0 ? void 0 : aikohero.appendChild(hero_container);
        hero_container.appendChild(img_bg);
        hero_container.appendChild(info);
        aikohero === null || aikohero === void 0 ? void 0 : aikohero.classList.add('hero');
        hero_container === null || hero_container === void 0 ? void 0 : hero_container.classList.add('hero-container');
        img_bg.classList.add('hero__hero-bg');
        img_bg.style.backgroundImage = `url(${el.image})`;
        info.classList.add('hero__info');
        info.innerHTML = `
    <h1 class="info__title">${el.title}</h1>
    <p class="info__subtitle">${el.subtitle}</p>
  `;
    };
    const changeHero = (i) => {
        console.log(i);
        const hero_items = document.getElementsByClassName('hero-container');
        const arrayElements = [...hero_items];
        arrayElements.forEach((el, index) => {
            el.style.left = `${i}00vw`;
        });
    };
    hero_data.forEach(el => {
        createHeroItem(el);
    });
    let count = 0;
    setInterval(() => {
        console.log('cambiando hero');
        changeHero(count);
        if (Math.abs(count) + 1 < hero_data.length) {
            count += -1;
        }
        else {
            count = 0;
        }
    }, 3000);
});
//# sourceMappingURL=01-values.js.map