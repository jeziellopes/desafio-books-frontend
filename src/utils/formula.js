// dynamic grid formula
const fg=(n,w)=>((w-((288*n)-(n>3?16:0)))/2)-1;
// conditional grid formula
export const g=(n,w)=>(fg(n,w)<60&&fg(n,w)>0)?fg(n-1,w):(fg(n,w)>=200)?fg(n+1,w):fg(n,w)