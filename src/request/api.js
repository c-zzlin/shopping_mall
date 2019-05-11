import { get, post,post2 } from './http'

//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const getHot =() =>post('/main/hot');
export const queryOrderList =p =>post2('/order/orderList',p);
export const queryOrderAll =p =>post2('/order/queryOrderAll',p);
export const queryCosmetics =() =>post2('/cosmetics/cosmeticsList');
export const querySkinCare =() =>post2('/skinCare/skinCareList');
export const queryPerfume =() =>post2('/perfume/perfumeList');
export const queryComment =() =>post2('/product/comment');
//添加评论
export const addComment =p =>post('/comment/addComment',p);
