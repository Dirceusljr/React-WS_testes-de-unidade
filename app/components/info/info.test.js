import { createRoot } from 'react-dom/client';
import { Info } from "./info";
import { act } from 'react-dom/test-utils';


describe('Info', () => {
    it('is visible', () => {
        const domNode = document.createElement('div');
        document.body.append(domNode);
        const root = createRoot(domNode)
        act(() => root.render(<Info />))

        console.log(document.body.outerHTML)

        expect(document.body.textContent).toContain('Game Over')
    })
})