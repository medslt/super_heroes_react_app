import md5 from 'md5';


export function  getRequestParms () {
    const publicKey= '298bab46381a6daaaee19aa5c8cafea5';
    const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    
    
    const ts = Date.now();
    const apikey =  publicKey;
    const hash = md5(`${ts}${privateKey}${publicKey}`);

    return {ts, apikey, hash};
}