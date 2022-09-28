describe('Test the root path', () => {

    test('arrow Function test', () => {
        let scores:number[]=[79,125,85, 110];
        let highScores:number[];
        highScores = scores.filter((element, index, array)=>{
            if(element > 100)
                return true;
        })
        expect(highScores.length).toBe(2);
    });
});