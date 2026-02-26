import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

function App(props) {
    return html`
        <h1>hey ${props.name}</h1>
    `;
}
render(
    html`<${App} name="World" />`,
    document.body
)