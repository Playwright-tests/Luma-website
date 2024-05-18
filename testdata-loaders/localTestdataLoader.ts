export class LocalTestdataLoader {

    public static fetch(fileName: string): any {

        return JSON.parse(JSON.stringify(require('../testdata/' + fileName)));
    }
}