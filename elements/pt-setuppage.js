
// @copyright
//   © 2016-2025 Jarosław Foksa
// @license
//   MIT License (check LICENSE.md for details)

import PTPage from "./pt-page.js";
import Xel from "../classes/xel.js";

import {html, css} from "../utils/template.js";

export default class PTSetupPageElement extends PTPage {
  static _shadowTemplate = html`
    <template>
      <article>
        <h2>Setup</h2>

        <x-card>
          <main>
            <h3><strong>1</strong> Install Xel</h3>

            <p>Run from the console:</p>
            <pt-code>npm install xel</pt-code>
            <p><strong>Note:</strong> Xel NPM package has no dependencies and it does not execute any scripts during installation.</p>
          </main>
        </x-card>

        <x-card>
          <main>
            <h3><strong>2</strong> Link Xel</h3>

            <p>Add to the  <code>&lt;head&gt;</code>:</p>
            <pt-code>&lt;script src="node_modules/xel/xel.js" type="module"&gt;&lt;/script&gt;</pt-code>
          </main>
        </x-card>

        <x-card>
          <main>
            <h3><strong>3</strong> Set theme</h3>

            Add to the <code>&lt;head&gt;</code> to use
              <x-select id="theme-select">
                <x-menu>
                  <x-menuitem value="fluent">
                    <x-icon href="/icons/portal.svg#fluent"></x-icon>
                    <x-label>Fluent</x-label>
                  </x-menuitem>

                  <x-menuitem value="material">
                    <x-icon href="/icons/portal.svg#material"></x-icon>
                    <x-label>Material</x-label>
                  </x-menuitem>

                  <x-menuitem value="cupertino">
                    <x-icon href="/icons/portal.svg#cupertino"></x-icon>
                    <x-label>Cupertino</x-label>
                  </x-menuitem>

                  <x-menuitem value="adwaita">
                    <x-icon href="/icons/portal.svg#adwaita"></x-icon>
                    <x-label>Adwaita</x-label>
                  </x-menuitem>

                  <hr/>

                  <x-menuitem value="fluent-dark">
                    <x-icon href="/icons/portal.svg#fluent"></x-icon>
                    <x-label>Fluent Dark</x-label>
                  </x-menuitem>

                  <x-menuitem value="material-dark">
                    <x-icon href="/icons/portal.svg#material"></x-icon>
                    <x-label>Material Dark</x-label>
                  </x-menuitem>

                  <x-menuitem value="cupertino-dark">
                    <x-icon href="/icons/portal.svg#cupertino"></x-icon>
                    <x-label>Cupertino Dark</x-label>
                  </x-menuitem>

                  <x-menuitem value="adwaita-dark">
                    <x-icon href="/icons/portal.svg#adwaita"></x-icon>
                    <x-label>Adwaita Dark</x-label>
                  </x-menuitem>
                </x-menu>
              </x-select>
              theme:
            <pt-code id="theme-code"></pt-code>

            <p><strong>Note:</strong> You can also link a custom theme CSS file. To make it a subtheme of an existing
            Xel theme you just have to use <code>@import</code> CSS rule.</p>
          </main>
        </x-card>

        <x-card>
          <main>
            <h3><strong>4</strong> Set accent color</h3>

            <p>Add to the <code>&lt;head&gt;</code> to use

            <x-select id="accent-preset-select">
              <x-menu id="accent-preset-menu"></x-menu>
            </x-select>

            accent color:</p>
            <pt-code id="accent-code"></pt-code>
          </main>
        </x-card>

        <x-card id="icons-card">
          <main>
            <h3><strong>5</strong> Set icons</h3>

            <p>Add to the <code>&lt;head&gt;</code> to use
            <x-select id="icons-select">
              <x-menu>
                <x-menuitem value="material" toggled>
                  <x-label>Material</x-label>
                </x-menuitem>

                <x-menuitem value="material-outlined">
                  <x-label>Material Outlined</x-label>
                </x-menuitem>

                <x-menuitem value="fluent">
                  <x-label>Fluent</x-label>
                </x-menuitem>

                <x-menuitem value="fluent-outlined">
                  <x-label>Fluent Outlined</x-label>
                </x-menuitem>
              </x-menu>
            </x-select>
            icons:</p>
            <pt-code id="icons-code"></pt-code>

            <p><strong>Note:</strong> You can also provide multiple paths separated by commas. If an icon
            is not found in the first file, Xel will look for it in the subsequent files.</p>
          </main>
        </x-card>

        <x-card id="locale-card">
          <main>
            <h3><strong>6</strong> Set locale (optional)</h3>

            <p>Add to the <code>&lt;head&gt;</code> to use
            <x-select id="locale-select">
              <x-menu>
                <x-menuitem value="en" toggled>
                  <x-label>English</x-label>
                </x-menuitem>

                <x-menuitem value="pl">
                  <x-label>Polish</x-label>
                </x-menuitem>
              </x-menu>
            </x-select>
            locale:</p>
            <pt-code id="locale-code"></pt-code>

            <p><strong>Note:</strong> You can skip this step if your aren't planning to translate your app UI
              into multiple languages. Otherwise you should provide a path to your own <a href="https://projectfluent.org/fluent/guide/" target="_blank">FTL locale file</a>. The file name should consist from ISO 639 language code, optionally followed by "-" and ISO 3166 territory code, e.g. <code>en.ftl</code>, <code>en-US.ftl</code> or <code>en-GB.ftl</code>.</p>

            <p><strong>Note:</strong> You can also provide multiple paths separated by commas. If a message
            is not found in the first locale file, Xel will look for it in the subsequent locale files.</p>
          </main>
        </x-card>
      </article>
    </template>
  `;

  static _shadowStyleSheet = css`
    h3 {
      margin-bottom: 0;
    }

    article h3 strong {
      display: inline-block;
      vertical-align: middle;
      width: 35px;
      height: 35px;
      margin: 0 4px 4px 0;
      background: var(--accent-color);
      border-radius: 80px;
      color: white;
      font-size: 22px;
      font-weight: 500;
      line-height: 35px;
      text-align: center;
    }

    article h3 span.optional {
      font-size: 20px;
      vertical-align: middle;
      opacity: 0.7;
    }

    article h4 {
      font-size: 22px;
      margin-top: 0;
    }

    pre {
      display: block;
      white-space: pre;
      overflow: auto;
    }

    th {
      background: var(--background-color);
    }

    hr {
      margin: 24px 0 20px;
    }

    #theme-select,
    #accent-preset-select,
    #icons-select,
    #locale-select {
      display: inline-block;
      vertical-align: middle;
      margin: 0 2px;
    }
  `

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  #xelThemeChangeListener;
  #xelAccentColorChangeListener;
  #xelIconsChangeListener;
  #xelLocalesChangeListener;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor() {
    super();

    this._elements["theme-select"].addEventListener("change", () => this.#onThemeSelectChange());
    this._elements["accent-preset-select"].addEventListener("change", () => this.#onAccentPresetSelectChange());
    this._elements["icons-select"].addEventListener("change", () => this.#onIconsSelectChange());
    this._elements["locale-select"].addEventListener("change", () => this.#onLocaleSelectChange());
  }

  connectedCallback() {
    super.connectedCallback();

    Xel.addEventListener("themechange", this.#xelThemeChangeListener = () => this.#onXelThemeChange());
    Xel.addEventListener("accentcolorchange", this.#xelAccentColorChangeListener = () => this.#onXelAccentColorChange());
    Xel.addEventListener("iconschange", this.#xelIconsChangeListener = () => this.#onXelIconsChange());
    Xel.addEventListener("localeschange", this.#xelLocalesChangeListener = () => this.#onXelLocalesChange());

    this.#updateAccentColorMenu();
    this.#update();
    this._onReady();
  }

  disconnectedCallback() {
    Xel.removeEventListener("themechange", this.#xelThemeChangeListener);
    Xel.removeEventListener("accentcolorchange", this.#xelAccentColorChangeListener);
    Xel.removeEventListener("iconschange", this.#xelIconsChangeListener);
    Xel.removeEventListener("localeschange", this.#xelLocalesChangeListener);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  #onXelThemeChange() {
    this.#updateAccentColorMenu();
    this.#update();
  }

  #onXelAccentColorChange() {
    this.#update();
  }

  #onXelIconsChange() {
    this.#update();
  }

  #onXelLocalesChange() {
    this.#update();
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  #onThemeSelectChange() {
    Xel.theme = `/themes/${this._elements["theme-select"].value}.css`;
  }

  #onAccentPresetSelectChange() {
    let value = this._elements["accent-preset-select"].value;
    Xel.accentColor = (value === "custom") ? Xel.presetAccentColors[Xel.accentColor] : value;
  }

  #onIconsSelectChange() {
    Xel.icons = [`/icons/${this._elements["icons-select"].value}.svg`];
  }

  #onLocaleSelectChange() {
    Xel.locales = [`/locales/${this._elements["locale-select"].value}.ftl`];
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  #update() {
    // Theme
    {
      let name = Xel.theme.substring(Xel.theme.lastIndexOf("/") + 1, Xel.theme.indexOf(".css"));
      let meta = `<meta name="xel-theme" content="node_modules/xel/themes/${name}.css">`;

      this._elements["theme-select"].value = name;
      this._elements["theme-code"].textContent = meta;
    }

    // Accent color
    {
      // Preset color
      if (Xel.presetAccentColors[Xel.accentColor]) {
        this._elements["accent-preset-select"].value = Xel.accentColor;
        this._elements["accent-code"].textContent = `<meta name="xel-accent-color" content="${Xel.accentColor}">`;
      }
      // Custom color
      else {
        this._elements["accent-preset-select"].value = "custom";
        this._elements["accent-code"].textContent = `<meta name="xel-accent-color" content="${Xel.accentColor}">`;
      }
    }

    // Icons
    {
      let iconsPath = Xel.icons[0];
      let iconsName = iconsPath.substring(iconsPath.lastIndexOf("/") + 1, iconsPath.lastIndexOf("."));
      let meta = `<meta name="xel-icons" content="node_modules/xel/icons/${iconsName}.svg">`;

      this._elements["icons-select"].value = iconsName;
      this._elements["icons-code"].textContent = meta;
    }

    // Locale
    {
      let localePath = Xel.locales[0];
      let localeName = localePath.substring(localePath.lastIndexOf("/") + 1, localePath.lastIndexOf("."));
      let meta = `<meta name="xel-locales" content="node_modules/xel/locales/${localeName}.ftl">`;

      this._elements["locale-select"].value = localeName;
      this._elements["locale-code"].textContent = meta;
    }
  }

  #updateAccentColorMenu() {
    let itemsHTML = "";

    for (let [colorName, colorValue] of Object.entries(Xel.presetAccentColors)) {
      itemsHTML += `
        <x-menuitem value="${colorName}">
          <x-swatch value="${colorValue}"></x-swatch>
          <x-label><x-message href="#accent-color-${colorName}"></x-message></x-label>
        </x-menuitem>
      `;
    }

    itemsHTML += `
      <hr/>
      <x-menuitem value="custom">
        <x-icon href="/icons/portal.svg#color-wheel"></x-icon>
        <x-label>Custom</x-label>
      </x-menuitem>
    `;

    this._elements["accent-preset-menu"].innerHTML = itemsHTML;
    this._elements["accent-preset-select"].value = "blue";
  }
}

customElements.define("pt-setuppage", PTSetupPageElement);
