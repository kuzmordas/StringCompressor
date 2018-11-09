export const environment = {
    compressForm: {
        regex: new RegExp(/^[a-f]+$/),
        url: 'http://127.0.0.1:3000/compress'
    },
    decompressForm: {
        regex: new RegExp(/^(?:[a-f]\d*)+$/),
        url: 'http://127.0.0.1:3000/decompress'
    }
}