import Objects from "../page_objects/challengesObjects";

const challenges = new Objects();

describe('Advanced Mode Challenges', async () => {
    it('challenge 2', async () => {
        await challenges.challenge2();
    })
    it('challenge 3 part 1', async () => {
        await challenges.challenge3();
    })
})