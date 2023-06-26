export class Dto {
    
    constructor(public total: number,
        public result: Map<number, number>,
        public previousResult: Map<number, number>,
        public difference: Map<number, string>) {}
}


