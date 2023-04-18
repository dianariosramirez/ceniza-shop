
export const delay = ( miliseconds ) => {
    return new Promise(( res, rej ) => {
        setTimeout( res, miliseconds);
    })
}