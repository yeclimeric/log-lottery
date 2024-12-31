import { IPrizeConfig, IPersonConfig } from '@/types/storeType';
export const defaultPersonList = <IPersonConfig[]>[]
export const defaultMusicList = [ 
    {
        id: '边程&房东的猫 - 美好事物-再遇少年.ogg' + new Date().getTime().toString(),
        name: '边程&房东的猫 - 美好事物-再遇少年.ogg',
        url: 'https://1kw20.fun/resource/audio/边程&房东的猫 - 美好事物-再遇少年.ogg'
    }
]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: '三等奖',
        sort: 1,
        isAll: false,
        count: 8,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: '三等奖',
            url: '@/../static/image/image3.png'
        },
        separateCount: {
            enable: true,
            countList: [
                { id: "1", count: 1, isUsedCount: 0 },
                { id: "2", count: 1, isUsedCount: 0 },
                { id: "3", count: 1, isUsedCount: 0 },
                { id: "4", count: 1, isUsedCount: 0 },
                { id: "5", count: 1, isUsedCount: 0 },
                { id: "6", count: 1, isUsedCount: 0 },
                { id: "7", count: 1, isUsedCount: 0 },
                { id: "8", count: 1, isUsedCount: 0 },   
            ]
        },
        desc: '三等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '002',
        name: '二等奖',
        sort: 2,
        isAll: false,
        count: 6,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: '二等奖',
            url: '@/../static/image/image2.png'
        },
        separateCount: {
            enable: true,
            countList: [
                { id: "1", count: 1, isUsedCount: 0 },
                { id: "2", count: 1, isUsedCount: 0 },
                { id: "3", count: 1, isUsedCount: 0 },
                { id: "4", count: 1, isUsedCount: 0 },
                { id: "5", count: 1, isUsedCount: 0 },
                { id: "6", count: 1, isUsedCount: 0 }
            ]
        },
        desc: '二等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '003',
        name: '一等奖',
        sort: 3,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        picture: {
            id: '0',
            name: '一等奖',
            url: '@/../static/image/image1.png'
        },
        separateCount: {
            enable: true,
            countList: [
                { id: "1", count: 1, isUsedCount: 0 },
                { id: "2", count: 1, isUsedCount: 0 },
                { id: "3", count: 1, isUsedCount: 0 },
            ]
        },
        desc: '一等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '004',
        name: '特等奖',
        sort: 4,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '3',
            name: '特等奖',
            url: '@/../static/image/image4.png'
        },
        separateCount: {
            enable: true,
            countList: [
                { id: "1", count: 1, isUsedCount: 0 }
            ]
        },
        desc: '特等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    }
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '001',
    name: '三等奖',
    sort: 1,
    isAll: false,
    count: 12,
    isUsedCount: 0,
    picture: {
        id: '2',
        name: '三等奖',
        url: '@/../static/image/image3.png'
    },
    separateCount: {
        enable: true,
        countList: []
    },
    desc: '三等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: ''
    },
    separateCount: {
        enable: true,
        countList: []
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等奖',
        url: '@/../static/image/image1.png'
    },
    {
        id: '1',
        name: '二等奖',
        url: '@/../static/image/image2.png'
    },
    {
        id: '2',
        name: '三等奖',
        url: '@/../static/image/image3.png'
    },
    {
        id: '3',
        name: '特等奖',
        url: '@/../static/image/image4.png'
    }
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 93, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 65, 66, 67, 84, 101, 100, 99, 32, 33]
