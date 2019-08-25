export const fetchSearchData=(data)=>{
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&safeSearch=strict&maxResults=15&type=video&key=AIzaSyBjhFK9MovixovHfXxDM3RUHST7ClMAFNY`);
}
export const fetchHomeData=()=>{
    return fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyBjhFK9MovixovHfXxDM3RUHST7ClMAFNY');
}