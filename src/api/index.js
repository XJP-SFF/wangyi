import myAxios from './myAxios';

//获取主页推荐对应的数据
export const getIndexData = ()=> myAxios({
    method: 'GET',
    url: '/getIndex'
});
//主页导航数据
export const getIndexCateModule = ()=> myAxios({
    method: 'GET',
    url: '/getIndexCateModule'
});
//分类右边数据
export const getCategoryDatas = ()=> myAxios({
    method: 'GET',
    url: '/getCategoryDatas'
});
//分类左边数据
export const getCateList = ()=> myAxios({
    method: 'GET',
    url: '/getCateList'
});