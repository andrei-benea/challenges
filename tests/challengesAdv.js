import Objects from "../page_objects/challengesObjects";

const challenges = new Objects();

describe('Advanced Mode Challenges', async () => {
    it('challenge 1', async () => {
        await challenges.challenge1();
    })
    it('challenge 1p2', async () => {
        await challenges.challenge1p2();
    })
    it('challenge 1p3', async () => {
        await challenges.challenge1p3();
    })
    it('challenge 1p4', async () => {
        await challenges.challenge1p4();
    })
    it('challenge 1p5', async () => {
        await challenges.challenge1p5();
    })
    it('challenge 2', async () => {
        await challenges.challenge2();
    })
    it('challenge 3', async () => {
        await challenges.challenge3();
    })
})