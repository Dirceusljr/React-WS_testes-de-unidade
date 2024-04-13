import { render, screen } from "@testing-library/react";
import Page from "./page";
import userEvent from "@testing-library/user-event";

describe('Page', () => {
    it('check correct answer', async () => {
        const user = userEvent.setup()
        render(<Page />)

        const input = screen.getByLabelText("What is Batman's real name?")
        // input.value = 'Bruce Wayne'
        await user.type(input, 'Bruce Wayne');

        const button = screen.getByRole('button', {name: 'Submit Answer'})
        await user.click(button)

        // expect(document.querySelector('.result').textContent).toBe('Correct!')
        expect(screen.getByText('Correct!')).toBeInTheDocument()

        screen.debug()
    })
})