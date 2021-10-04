const refs = {
  menuBtnOpen: document.querySelector('[data-menu-button-open]'),
  menuBtnClose: document.querySelector('[data-menu-button-close]'),
  mobileMenuRef: document.querySelector('[data-menu]'),
};

refs.menuBtnOpen.addEventListener('click', onOpenMenu);
refs.menuBtnClose.addEventListener('click', onCloseMenu);

function onOpenMenu(event) {
  event.preventDefault();

  // menuBtnOpen.classList.add("is-open");
  // mobileMenuRef.classList.add("is-open");
  // menuBtnClose.classList.add("is-open");

  refs.menuBtnOpen.classList.toggle('is-open');
  refs.mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  refs.menuBtnClose.classList.toggle('is-open');
}

function onCloseMenu() {
  // menuBtnOpen.classList.remove("is-open");
  // mobileMenuRef.classList.remove("is-open");
  // menuBtnClose.classList.remove("is-open");

  refs.menuBtnOpen.classList.toggle('is-open');
  refs.mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  refs.menuBtnClose.classList.toggle('is-open');
}

export { onOpenMenu, onCloseMenu };
