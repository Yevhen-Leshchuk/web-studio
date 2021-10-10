const refs = {
  menuBtnOpen: document.querySelector('[data-menu-button-open]'),
  menuBtnClose: document.querySelector('[data-menu-button-close]'),
  mobileMenuRef: document.querySelector('[data-menu]'),
  contactLinkRef: document.querySelector('.js-link--contact'),
  htmlRef: document.querySelector('html'),
  bodyRef: document.querySelector('body'),
};

refs.menuBtnOpen.addEventListener('click', onOpenMenu);
refs.menuBtnClose.addEventListener('click', onCloseMenu);
refs.contactLinkRef.addEventListener('click', onClickLinkContact);

function onOpenMenu(event) {
  event.preventDefault();

  // menuBtnOpen.classList.add("is-open");
  // mobileMenuRef.classList.add("is-open");
  // menuBtnClose.classList.add("is-open");

  // refs.bodyRef.classList.add('is-hidden');
  // refs.htmlRef.classList.add('is-landscape');

  refs.menuBtnOpen.classList.toggle('is-open');
  refs.mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  refs.menuBtnClose.classList.toggle('is-open');

  refs.bodyRef.classList.add('body_landscape--hidden', 'body_vertical--hidden');
  refs.htmlRef.classList.toggle('is-landscape');
}

function onCloseMenu() {
  // menuBtnOpen.classList.remove("is-open");
  // mobileMenuRef.classList.remove("is-open");
  // menuBtnClose.classList.remove("is-open");

  // refs.bodyRef.classList.add(
  //   'body_landscape--hidden',
  //   'body_vertical--hidden',
  // );
  // refs.htmlRef.classList.add('is-landscape');

  refs.menuBtnOpen.classList.toggle('is-open');
  refs.mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  refs.menuBtnClose.classList.toggle('is-open');

  refs.bodyRef.classList.remove(
    'body_landscape--hidden',
    'body_vertical--hidden',
  );
  refs.htmlRef.classList.toggle('is-landscape');
}

function onClickLinkContact(event) {
  event.preventDefault();
  onCloseMenu();

  scrollContainer();
}

function scrollContainer() {
  refs.bodyRef.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

export { onOpenMenu, onCloseMenu };
