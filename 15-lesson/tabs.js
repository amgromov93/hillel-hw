class Tabs {
    #rootEl;
    #navElements;
    #contentElements;
    #activeTabIndex;
    
    static TABS_BOX_CLASS = 'tabs';
    static NAV_BOX_CLASS = 'tabs-nav__box';
    static NAV_BUTTON_CLASS = 'tabs-nav__button';
    static NAV_BUTTON_ACTIVE_CLASS = 'tabs-nav__button--active';
    static CONTENT_ITEM_CLASS = 'tabs-content-box__item';
    static CONTENT_ITEM_ACTIVE_CLASS = 'tabs-content-box__item--active';
    static SET_ACTIVE_TAB = '0';
    static NAV_CLASS = '0';
    static CONTENT_CLASS = '1';

    constructor(rootEl) {
        this.#rootEl = rootEl;
        this.#navElements = this.#rootEl.children[Tabs.NAV_CLASS].children;
        this.#contentElements = this.#rootEl.children[Tabs.CONTENT_CLASS].children;

        this.bindTabsBoxStyle();
        this.bindNavStyle();
        this.bindContentStyle();
        this.bindEvent();
        this.setActiveTab(Tabs.SET_ACTIVE_TAB);
    }

    bindTabsBoxStyle() {
        this.#rootEl.classList.add(Tabs.TABS_BOX_CLASS);
    }

    bindNavStyle() {
        const navBox = this.#rootEl.children[0];
        navBox.classList.add(Tabs.NAV_BOX_CLASS);

        for (const itemBtnEl of this.#navElements) {
            itemBtnEl.classList.add(Tabs.NAV_BUTTON_CLASS);
        }
    }
   
    bindContentStyle() {
        for (const itemContEl of this.#contentElements) {
            itemContEl.classList.add(Tabs.CONTENT_ITEM_CLASS);
        }
    }

    bindEvent() {
        this.#rootEl.addEventListener('click', this.onRootElClick.bind(this));
    }

    onRootElClick(e) {
        if (e.target.classList.contains(Tabs.NAV_BUTTON_CLASS)) {
            const clickedBtnIndex = this.getBtnIndex(e.target);
           
            this.hideActiveTab();
            this.setActiveTab(clickedBtnIndex);
        }
    }

    getBtnIndex(clickedEl) {
        for (let i = 0; i < this.#navElements.length; i++) {
            if (clickedEl === this.#navElements[i]) {
                return i;
            }
        }
    }

    setActiveTab(index) {
        this.#navElements[index].classList.add(Tabs.NAV_BUTTON_ACTIVE_CLASS);
        this.#contentElements[index].classList.add(Tabs.CONTENT_ITEM_ACTIVE_CLASS);

        this.#activeTabIndex = index;
    }

    hideActiveTab() {
        this.#navElements[this.#activeTabIndex].classList.remove(Tabs.NAV_BUTTON_ACTIVE_CLASS);
        this.#contentElements[this.#activeTabIndex].classList.remove(Tabs.CONTENT_ITEM_ACTIVE_CLASS);
    }
}