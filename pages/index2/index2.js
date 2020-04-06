// 必须有Page({   })
let app = getApp()
Page({  
    data: {
        msg: '',
		list: [
			{
				dictValue: 'LNN',
				dictName: '刘宁宁'
			},
			{
				dictName: '李东',
				dictValue: 'LIDONG'
			}
		]
    },
	clickBtn: function () {
		console.log('点击事件')
	},
	onLoad() {
		this.setData({
			msg: app.globalData.msg
		})
		this.setData({
			list: []
		})
		this.msg = app.globalData.msg
		console.log(this.msg)
	}

 })