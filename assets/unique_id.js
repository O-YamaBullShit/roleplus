function getID(prefix){
    var mili = Date.now().toString(16);
    if(!prefix){
        return mili;
    } else {
        return prefix + mili
    }
} 