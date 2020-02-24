import myAxios from './myAxios';

//获取主页推荐对应的数据
export const getIndexData = ()=> myAxios({
    method: 'GET',
    url: '/api/getIndex'
});
//主页导航数据
export const getIndexCateModule = ()=> myAxios({
    method: 'GET',
    url: '/api/getIndexCateModule'
});
//分类右边数据
export const getCategoryDatas = ()=> myAxios({
    method: 'GET',
    url: '/api/getCategoryDatas'
});
//分类左边数据
export const getCateList = ()=> myAxios({
    method: 'GET',
    url: '/api/getCateList'
});
//搜索界面初始化显示数据
export const getSearchData = ()=> myAxios({
    method: 'POST',
    url: '/myou/xhr/search/init.json'
});

//关键字搜索接口
export const getSearchKeyWords = (keywordPrefix)=> myAxios({
    method: 'POST',
    url: '/myou/xhr/search/searchAutoComplete.json',
    data: {
        keywordPrefix
    }
});

//值得买Nav接口
export const getTopicNavData = ()=> myAxios({
    method: 'GET',
    url: '/myou/topic/v1/know/navWap.json'
});

//获取瀑布流-首屏数据
export const getWaterFallData = ()=> myAxios({
    method: 'POST',
    url: '/myou/topic/v1/find/recManual.json'
});

//瀑布流-触底加载接口
export const getWaterFallLazyLoad = (page, size)=> myAxios({
    method: 'POST',
    url: '/myou/topic/v1/find/recAuto.json',
    params: {
        page,
        size
    }
});