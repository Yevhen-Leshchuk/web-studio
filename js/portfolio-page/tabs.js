export default class Tabs {
  constructor({
    rootSelector,
    activeControlClass = 'active',
    activePaneClass = 'active',
    activeTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._activePaneClass = activePaneClass;
    this._activeTabIdx = activeTab - 1;

    this._bindEvents();
    this._setActiveTab();
  }

  _getRefs(root) {
    const refs = {};

    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);

    return refs;
  }

  _bindEvents() {
    this._refs.controls.addEventListener(
      'click',
      this._onControlsClick.bind(this),
    );
  }

  _onControlsClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'BUTTON') {
      console.log('Кликнули не в кнопку');
      return;
    }

    this._removeActiveTab();

    const controlItem = event.target;
    controlItem.classList.add(this._activeControlClass);

    const dataPane = this._getPaneData(controlItem);
    this._setActivePane(dataPane);
  }

  _setActiveTab() {
    const controlItems = this._refs.controls.querySelectorAll(
      '.portfolio-button__button',
    );
    const control = controlItems[this._activeTabIdx];
    control.classList.add(this._activeControlClass);

    const dataPane = this._getPaneData(control);
    this._setActivePane(dataPane);
  }

  _removeActiveTab() {
    const currentActiveItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );

    if (!currentActiveItem) {
      return;
    }

    currentActiveItem.classList.remove(this._activeControlClass);

    const dataPaneActive = this._getPaneData(currentActiveItem);
    this._removeActivePane(dataPaneActive);
  }

  _setActivePane(dataPane) {
    const paneArray = this._getPaneBySelector(dataPane);
    paneArray.forEach(pane => {
      pane.classList.add(this._activePaneClass);
    });
  }

  _removeActivePane(dataPaneActive) {
    const paneArray = this._getPaneBySelector(dataPaneActive);
    paneArray.forEach(pane => {
      pane.classList.remove(this._activePaneClass);
    });
  }

  _getPaneData(control) {
    return control.dataset.selection;
  }

  _getPaneBySelector(selector) {
    return this._refs.panes.querySelectorAll(`.${selector}`);
  }
}

const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'portfolio-button--active',
  activePaneClass: 'portfolio-list__card--visible',
  activeTab: 1,
});
1;
