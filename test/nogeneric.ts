describe('', () => {
    class Data {
        value: any;
        constructor(value: any){
            this.value = value
        }
    }

    it('should accept all value', async () => {
        const data = new Data("Aldi");
        // data.value = 100;

        console.info(data.value.toUpperCase());
    })
})
