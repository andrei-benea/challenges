import Objects from "../page_objects/challengesObjects";

const challenges = new Objects();

describe('Creating a new company on LE', async () => {
    it('challenge 1', async () => {
        await challenges.challengeOne();
    })
    it('challenge 2', async () => {
        await challenges.challengeTwo();
    })
    it('challenge 3', async () => {
        await challenges.challengeThree();
    })
    it('challenge 4', async () => {
        await challenges.challengeFour();
    })
    it('challenge 5', async () => {
        await challenges.challengeFive();
    })
    it('challenge 6', async () => {
        await challenges.challengeSix();
    })
})