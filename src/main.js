import {createUserRankTemplate} from "./components/user-rank/user-rank";
import {createFilmCardTemplate} from "./components/card-film/card-film";
import {createFilmDetailsTemplate} from "./components/film-details/film-details";
import {createFilmsContainerTemplate} from "./components/films-container/films-container";
import {createFilmsListExtraTemplate} from "./components/films-list-extra/films-list-extra";
import {createShowButtonTemplate} from "./components/show-more-button/shom-more-button";
import {createSiteNavigationTemplate} from "./components/site-navigation/site-navigation";
import {createSortTemplate} from "./components/sort-films/sort-films";

const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
};

const bodyEl = document.querySelector('body');
const siteMainEl = document.querySelector('.main');
const siteHeaderEl = document.querySelector('.header');

render(siteHeaderEl, createUserRankTemplate());
render(siteMainEl, createSiteNavigationTemplate());
render(siteMainEl, createSortTemplate());
render(siteMainEl, createFilmsContainerTemplate());

const filmsListContainerEl = document.querySelector('.films-list__container');
const filmsEl = document.querySelector('.films');
const filmsListEl = document.querySelector('.films-list');

for(let i = 0; i < 5; i++) {
    render(filmsListContainerEl, createFilmCardTemplate());
}

render(filmsListEl, createShowButtonTemplate());
render(filmsEl, createFilmsListExtraTemplate('Top rated', 'top-rated'));
render(filmsEl, createFilmsListExtraTemplate('Most commented', 'most-commented'));

const filmsListTopRatedEl = document.querySelector('.top-rated');
const filmsListMostCommentedEl = document.querySelector('.most-commented');

for(let i = 0; i < 2; i++) {
    render(filmsListTopRatedEl, createFilmCardTemplate());
    render(filmsListMostCommentedEl, createFilmCardTemplate());
}

const filmsCard = document.querySelectorAll('.film-card');

filmsCard.forEach((item) => {
    item.addEventListener('click', () => {
        bodyEl.classList.add('hide-overflow');
        render(bodyEl, createFilmDetailsTemplate());

        const filmDetailsCloseEl = document.querySelector('.film-details__close-btn');
        const filmDetailsEl = document.querySelector('.film-details');

        filmDetailsCloseEl.addEventListener('click', () => {
            filmDetailsEl.remove();
            bodyEl.classList.remove('hide-overflow')
        })
    });
});













