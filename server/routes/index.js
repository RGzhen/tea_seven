var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
router.get('/index_list/0/data/1', function(req, res, next) {
	res.send({
		code: 200,
		data: {
			topBar: [{
					id: 0,
					label: '推荐'
				},
				{
					id: 1,
					label: '大红袍'
				},
				{
					id: 2,
					label: '金骏眉'
				},
				{
					id: 3,
					label: '绿茶'
				},
				{
					id: 4,
					label: '普洱'
				},
				{
					id: 5,
					label: '茶具'
				},
				{
					id: 6,
					label: '花茶'
				},
			],
			data: [
				//这是swiper
				{
					id: 0,
					type: 'swiperList',
					data: [{
							id: 0,
							imgUrl: './images/swiper1.jpeg'
						},
						{
							id: 1,
							imgUrl: './images/swiper2.jpeg'
						},
						{
							id: 3,
							imgUrl: './images/swiper3.jpeg'
						}
					]
				},
				//这是icons
				{
					id: 1,
					type: 'iconsList',
					data: [{
							id: 1,
							title: '自饮茶',
							imgUrl: './images/icons1.png'
						},
						{
							id: 2,
							title: '茶具',
							imgUrl: './images/icons2.png'
						},
						{
							id: 3,
							title: '茶礼盒',
							imgUrl: './images/icons3.png'
						},
						{
							id: 4,
							title: '领福利',
							imgUrl: './images/icons4.png'
						},
						{
							id: 5,
							title: '官方验证',
							imgUrl: './images/icons5.png'
						}
					]
				},
				//上下轮播
				{
					id: 2,
					type: 'noticeList',
					data: [{
							title: "岩茶为何不提春茶概念？",
							date: "2017-12-16",
						},
						{
							title: "重要公告 | 真伪客服官方验证功能上线",
							date: "2017-12-16",
						},
					]
				},
				//爆款推荐
				{
					id: 3,
					type: 'recommendList',
					data: [{
							id: 1,
							name: '龙井1號铁罐250g',
							content: '鲜爽甘醇 口粮首选',
							price: '68',
							imgUrl: './images/recommend.jpeg'
						},
						{
							id: 2,
							name: '龙井1號铁罐250g',
							content: '鲜爽甘醇 口粮首选',
							price: '68',
							imgUrl: './images/recommend.jpeg'
						}
					]
				},
				//猜你喜欢
				{
					id: 4,
					type: 'likeList',
					data: [{
							id: 1,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						},
						{
							id: 2,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						},
						{
							id: 3,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						}
					]
				}
			],
		}
	});
});
router.get('/index_list/1/data/1', function(req,res ,next) {
	res.send({
		code: 200,
		data: [
			{
				id: 0,
				type: 'adList',
				data: [{
						id: 0,
						imgUrl: './images/dhp.jpeg'
					},
					{
						id: 1,
						imgUrl: './images/jjmpic.jpg'
					}
				]
			},
			{
				id: 1,
				type: 'likeList',
				data: [{
						id: 1,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					},
					{
						id: 2,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					},
					{
						id: 3,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					}
				]
			}
		]
	})
})
router.get('/goods/list',function(req,res,next){
	
	res.send({
		code:0,
		data:[
			{
				//一级
				id:0,
				name:'推荐',
				data:[
					{
						//二级
						id:0,
						name:'推荐',
						list:[
						//三级
							{
								id:0,
								name:'铁观音',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'功夫茶具',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'茶具电器',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'紫砂壶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:6,
								name:'武夷岩茶',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id:1,
				name:'绿茶',
				data:[
					{
						//二级
						id:0,
						name:'绿茶',
						list:[
						//三级
							{
								id:0,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id:2,
				name:'乌龙',
				data:[
					{
						//二级
						id:0,
						name:'乌龙',
						list:[
						//三级
							{
								id:0,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id:3,
				name:'红茶',
				data:[
					{
						//二级
						id:0,
						name:'红茶',
						list:[
						//三级
							{
								id:0,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id:4,
				name:'白茶',
				data:[
					{
						//二级
						id:0,
						name:'白茶',
						list:[
						//三级
							{
								id:0,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id:5,
				name:'普洱',
				data:[
					{
						//二级
						id:0,
						name:'普洱',
						list:[
						//三级
							{
								id:0,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:1,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:3,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:4,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:5,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:6,
								name:'龙井',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:7,
								name:'碧螺春',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:8,
								name:'雀舌',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:9,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:10,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:11,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:12,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:13,
								name:'安吉白茶',
								imgUrl:'./images/list1.jpeg'
							},
							{
								id:14,
								name:'六安瓜片',
								imgUrl:'./images/list1.jpeg'
							}
						]
					}
				]
			}
			
		]
	})
		
})
router.get('/index_list/2/data/1', function (req, res , next){
	res.send({code:200 , data: [
			{
				id: 0,
				type: 'adList',
				data: [{
						id: 0,
						imgUrl: './images/jjm.jpg'
					},
					{
						id: 1,
						imgUrl: './images/dhp.jpg'
					}
				]
			},
			{
				id: 1,
				type: 'likeList',
				data: [{
						id: 1,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					},
					{
						id: 2,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					},
					{
						id: 3,
						imgUrl: './images/like.jpeg',
						name: '建盏茶具套装 红色芝麻毫 12件套',
						price: 299
					}
				]
			}
		]})
})
router.post('/index_list/data/goods_list',function(req,res,next){
	let [ searchName , orderName ] = Object.keys(req.body)
	let [ name , order ] = Object.values(req.body)
	connection.query('select * from goods_list where name like "%'+name+'%" order by '+orderName+' '+order+'',function (error,results){
		res.send({
			code:0,
			data:results
		})
	})
})
module.exports = router;
