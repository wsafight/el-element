// @ts-ignore
import { El } from '@frameable/el'

class CustomTemplate extends El {
  created() {
  }
  mounted () {
  }
  unmounted() {
  }
  render(html: Function) {
    return html`
      <div class='test'>Hello El</div>
    `
  }

  styles(css: Function) {
    return css`
      .test {
        color: red
      }
    `
  }
}

// @ts-ignore
customElements.define('my-element', CustomTemplate)