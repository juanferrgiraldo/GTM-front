export class Publication {
    constructor(
        public type: string,
        public productName: string,
        public description: string,
        public user?: string,
        public imagePath?: string
    ) {}
}
