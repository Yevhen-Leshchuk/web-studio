'use strict';

const menuBtnOpen = document.querySelector('[data-menu-button-open]');
const menuBtnClose = document.querySelector('[data-menu-button-close]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnOpen.addEventListener('click', onOpenMenu);
menuBtnClose.addEventListener('click', onCloseMenu);

function onOpenMenu(event) {
  event.preventDefault();

  // menuBtnOpen.classList.add("is-open");
  // mobileMenuRef.classList.add("is-open");
  // menuBtnClose.classList.add("is-open");

  menuBtnOpen.classList.toggle('is-open');
  mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  menuBtnClose.classList.toggle('is-open');
}

function onCloseMenu() {
  // menuBtnOpen.classList.remove("is-open");
  // mobileMenuRef.classList.remove("is-open");
  // menuBtnClose.classList.remove("is-open");

  menuBtnOpen.classList.toggle('is-open');
  mobileMenuRef.classList.toggle('is-open'); // toggle добавляет класс если его нет и удаляет если он есть
  menuBtnClose.classList.toggle('is-open');
}

export { onOpenMenu, onCloseMenu };
