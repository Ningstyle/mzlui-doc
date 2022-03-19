<template>
  <div class="mzluiHomeBox">
    <div class="mzluileftMenu">
      <div class="list-box">
        <div class="item-list" v-for="(item,index) in MenuLangList" :key="index">
          <p class="titls"><span>{{item['title']}}</span></p>
          <li v-for="(v,i) in item.list" :key="i" :class="{'active':menuIndex==index+'-'+i}" @click="switchMenu({'parentTitle':item['title'],'title':v['title'],'index':index,'index1':i,'path':v['path']})">{{v['title']}}</li>
        </div>
      </div>
    </div>
    <div class="mzluirightView">
			<router-view></router-view>
		</div>
    <m-backtop target=".mzluirightView"></m-backtop>
  </div>
</template>
<script setup>
	import {reactive , ref, watchEffect} from 'vue'
	import {useRouter} from 'vue-router'
	import {useMainStore} from "@/store/index"
	import MenuList from '@/const/menuList.js'
	const $store = useMainStore()
	const router = useRouter()
	const menuIndex = ref(sessionStorage.getItem('mIndex')||'0-0')
	let menuData = []
	const state = reactive({
		MenuLangList:[],
		lang:$store.getLang
	})
	// 菜单切换
	const switchMenu = (obj) =>{
    if(router.currentRoute.value.path!=obj.path){
      router.push(obj.path)
    }
		menuIndex.value = obj.index+'-'+obj.index1
		sessionStorage.setItem('mIndex',obj.index+'-'+obj.index1)
	}
	watchEffect(() => {
		MenuList.forEach((item,index)=>{
			let menuItem = {
				'title':$store.lang=="CN"?item['title-cn']:item['title-en'],
				'list':[]
			}
			menuData.push(menuItem)
			item['list'].forEach((v,i)=>{
				let menuItem = {
					'title':$store.lang=="CN"?v['title-cn']:v['title-en'],
					'path':v['path']
				}
				menuData[index]['list'].push(menuItem)
				state.MenuLangList = menuData
			})
		})
  });
	const {MenuLangList} = state
</script>
<style scoped lang="scss">
.mzluiHomeBox{
  width:100%;
  height: auto;
  overflow: hidden;
  margin-top:2vh;
  .mzluileftMenu{
    width: 317px;
    height:calc(100vh - 64px - 2vh);
    overflow-y: auto;
    border-right:1px solid #f0f0f0;
    float:left;
    .list-box{
      width:100%;
      height:auto;
      overflow:hidden;
      padding-bottom:30px;
      box-sizing: border-box;
      .item-list{
        width:100%;
        height:auto;
        overflow:hidden;
        p{
          padding-left:34px;
          box-sizing:border-box;
          height:30px;
          span{
            width:100%;
            height:100%;
            display: inline-block;
            font-size:14px;
            color:#00000073;
            border-bottom:1px solid #f0f0f0
          }
        }
        li{
          list-style: none;
          padding-left:34px;
          box-sizing:border-box;
          cursor: pointer;
          font-size:14px;
          color:#000000d9;
          line-height:40px;
          transform: all .2s ease;
          &:hover{
            color:#0e80eb
          }
        }
        li.active{
          color:#0e80eb;
          background:rgba(14, 128, 235,.1);
          border-left:3px solid #0e80eb;
					padding-left:31px;
					transform: all .2s ease;
        }
      }
    }
  }
  .mzluirightView{
    width:calc(100% - 320px);
    height:calc(100vh - 64px - 2vh);
    overflow-y:auto;
    float:right;
    padding:0 calc(2vw + 100px) 0 2vw;
    box-sizing: border-box;

  }
}
.mzluileftMenu::-webkit-scrollbar {
	width: 2px;
	height: 2px;
}
	
.mzluileftMenu::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: #a6a6a7;
}
	
.mzluileftMenu::-webkit-scrollbar-track {
	border-radius: 0px;
	background: #fff;
}

.mzluirightView::-webkit-scrollbar {
	width: 2px;
	height: 1px;
}
	
.mzluirightView::-webkit-scrollbar-thumb {
	border-radius: 8px;
	background: #a6a6a7;
}
	
.mzluirightView::-webkit-scrollbar-track {
	border-radius: 8px;
	background: #fff;
}

</style>
<style>
  
</style>