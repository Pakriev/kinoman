export const createFilmsListExtraTemplate = (title, blockName) => {
    let className = '';

    if(blockName === 'top-rated') {
        className = ' top-rated';
    } else if(blockName === 'most-commented') {
        className = ' most-commented';
    }

    return (
        `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>

      <div class="films-list__container ${className}">
      </div>
    </section>`
    );
};