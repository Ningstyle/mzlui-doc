<template>
  <div class="buttonsBox" v-highlight>
		<m-title mtitle="Button按钮" mins="网页常用button按钮，常用于响应一个事件或处理某个逻辑"></m-title>
		<c-title ctitle="基本状态" ctips="包括了常用按钮类型的基本类型"></c-title>
		<block>
			<div class="items">
				<span><m-button>默认按钮</m-button></span>  
				<span><m-button type="primary">主要按钮</m-button></span> 
				<span><m-button type="success">成功按钮</m-button></span> 
				<span><m-button type="danger">危险按钮</m-button></span> 
				<span><m-button type="warning">警告按钮</m-button></span> 
				<span><m-button type="dashed">虚线按钮</m-button></span> 
				<span><m-button type="text">文本按钮</m-button></span>
			</div>
			<div class="items">
				<span><m-button round>默认按钮</m-button></span>  
				<span><m-button type="primary" round>主要按钮</m-button></span>
				<span><m-button type="success" round>成功按钮</m-button></span> 
				<span><m-button type="danger" round>危险按钮</m-button></span> 
				<span><m-button type="warning" round>警告按钮</m-button></span> 
				<span><m-button type="dashed" round>虚线按钮</m-button></span>
			</div>
			<div class="items-last">
				<span><m-button leftIcon="m-icon-electronics"></m-button></span>  
				<span><m-button type="primary" size="small" leftIcon="m-icon-edit"></m-button></span>
				<span><m-button type="success" size="mini" disabled leftIcon="m-icon-add-circle"></m-button></span> 
				<span><m-button type="danger" round disabled leftIcon="m-icon-home"></m-button></span> 
				<span><m-button type="warning" round leftIcon="m-icon-calendar"></m-button></span> 
				<span><m-button type="dashed" round leftIcon="m-icon-upload"></m-button></span>
				<span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437">删除</m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button&gt;默认按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary"&gt;主要按钮&lt;/m-button&gt; 
&lt;m-button type="success"&gt;成功按钮&lt;/m-button&gt; 
&lt;m-button type="danger"&gt;危险按钮&lt;/m-button&gt; 
&lt;m-button type="warning"&gt;警告按钮&lt;/m-button&gt; 
&lt;m-button type="dashed"&gt;虚线按钮&lt;/m-button&gt; 
&lt;m-button type="text"&gt;文本按钮&lt;/m-button&gt; 

&lt;m-button round&gt;默认按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary" round&gt;主要按钮&lt;/m-button&gt; 
&lt;m-button type="success" round&gt;成功按钮&lt;/m-button&gt; 
&lt;m-button type="danger" round&gt;危险按钮&lt;/m-button&gt; 
&lt;m-button type="warning" round&gt;警告按钮&lt;/m-button&gt; 
&lt;m-button type="dashed" round&gt;虚线按钮&lt;/m-button&gt;

&lt;m-button leftIcon="m-icon-electronics"&gt;&lt;/m-buttonn&gt; 
&lt;m-button type="primary" leftIcon="m-icon-edit"&gt;&lt;/m-button&gt; 
&lt;m-button type="success" leftIcon="m-icon-add-circle" disabled&gt;&lt;/m-button&gt; 
&lt;m-button type="danger" leftIcon="m-icon-home" disabled&gt;&lt;/m-button&gt; 
&lt;m-button type="warning" leftIcon="m-icon-calendar"&gt;&lt;/m-button&gt; 
&lt;m-button type="dashed" leftIcon="m-icon-upload"&gt;&lt;/m-button&gt; 
&lt;m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"&gt;删除&lt;/m-button&gt; 
				</code>
			</pre>
		</div>
		<c-title ctitle="禁用状态" ctips="按钮不可操作的状态——通过 disabled 属性设置实现"></c-title>
		<block>
			<div class="items">
				<span><m-button disabled>默认按钮</m-button></span>  
				<span><m-button type="primary" disabled>主要按钮</m-button></span> 
				<span><m-button type="success" disabled>成功按钮</m-button></span> 
				<span><m-button type="danger" disabled>危险按钮</m-button></span> 
				<span><m-button type="warning" disabled>警告按钮</m-button></span> 
				<span><m-button type="dashed" disabled>虚线按钮</m-button></span> 
				<span><m-button type="text" disabled>文本按钮</m-button></span>
			</div>
			<div class="items-last">
				<span><m-button round disabled>默认按钮</m-button></span>  
				<span><m-button type="primary" round disabled>主要按钮</m-button></span> 
				<span><m-button type="success" round disabled>成功按钮</m-button></span> 
				<span><m-button type="danger" round disabled>危险按钮</m-button></span> 
				<span><m-button type="warning" round disabled>警告按钮</m-button></span> 
				<span><m-button type="dashed" round disabled>虚线按钮</m-button></span> 
				<span><m-button type="text" round disabled>文本按钮</m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button disabled&gt;默认按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary" disabled&gt;主要按钮&lt;/m-button&gt; 
&lt;m-button type="success" disabled&gt;成功按钮&lt;/m-button&gt; 
&lt;m-button type="danger" disabled&gt;危险按钮&lt;/m-button&gt; 
&lt;m-button type="warning" disabled&gt;警告按钮&lt;/m-button&gt; 
&lt;m-button type="dashed" disabled&gt;虚线按钮&lt;/m-button&gt; 
&lt;m-button type="text" disabled&gt;文本按钮&lt;/m-button&gt; 

&lt;m-button round disabled&gt;默认按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary" round disabled&gt;主要按钮&lt;/m-button&gt; 
&lt;m-button type="success" round disabled&gt;成功按钮&lt;/m-button&gt; 
&lt;m-button type="danger" round disabled&gt;危险按钮&lt;/m-button&gt; 
&lt;m-button type="warning" round disabled&gt;警告按钮&lt;/m-button&gt; 
&lt;m-button type="dashed" round disabled&gt;虚线按钮&lt;/m-button&gt;
&lt;m-button type="text" round disabled&gt;文本按钮&lt;/m-button&gt;
				</code>
			</pre>
		</div>
		<c-title ctitle="不同大小" ctips="不同大小类型的按钮——通过 size 属性设置实现"></c-title>
		<block>
			<div class="items">
				<span><m-button>默认大小</m-button></span>  
				<span><m-button type="primary">默认大小</m-button></span>
				<span><m-button type="success" size="medium">中等大小</m-button></span> 
				<span><m-button type="danger" size="medium">中等大小</m-button></span> 
				<span><m-button type="warning" size="small">小型按钮</m-button></span> 
				<span><m-button type="dashed" size="mini">超小按钮</m-button></span>
				<span><m-button type="text" size="mini">超小按钮</m-button></span>
			</div>
			<div class="items-last">
				<span><m-button round>默认大小</m-button></span>  
				<span><m-button type="primary" round>默认大小</m-button></span>
				<span><m-button type="success" size="medium" round>中等大小</m-button></span> 
				<span><m-button type="danger" size="medium" round>中等大小</m-button></span> 
				<span><m-button type="warning" size="small" round>小型按钮</m-button></span> 
				<span><m-button type="dashed" size="mini" round>超小按钮</m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button&gt;默认大小&lt;/m-buttonn&gt; 
&lt;m-button type="primary"&gt;默认大小&lt;/m-button&gt; 
&lt;m-button type="success" size="medium"&gt;中等大小&lt;/m-button&gt; 
&lt;m-button type="danger" size="medium"&gt;中等大小&lt;/m-button&gt; 
&lt;m-button type="warning" size="small"&gt;小型按钮&lt;/m-button&gt; 
&lt;m-button type="dashed" size="mini"&gt;超小按钮&lt;/m-button&gt; 
&lt;m-button type="text" size="mini"&gt;超小按钮&lt;/m-button&gt; 

&lt;m-button round &gt;默认大小&lt;/m-buttonn&gt; 
&lt;m-button type="primary" round &gt;默认大小&lt;/m-button&gt; 
&lt;m-button type="success" round size="medium"&gt;中等大小&lt;/m-button&gt; 
&lt;m-button type="danger" round size="medium"&gt;中等大小&lt;/m-button&gt; 
&lt;m-button type="warning" round size="small"&gt;小型按钮&lt;/m-button&gt; 
&lt;m-button type="dashed" round size="mini"&gt;超小按钮&lt;/m-button&gt;
				</code>
			</pre>
		</div>
		<c-title ctitle="图标按钮" ctips="带图标类型的按钮——通过 leftIcon 或者 rightIcon 属性设置实现并确定icon出现的位置"></c-title>
		<block>
			<div class="items">
				<span><m-button leftIcon="m-icon-complete">按钮</m-button></span>  
				<span><m-button type="primary" size="medium" leftIcon="m-icon-add-circle">添加</m-button></span>
				<span><m-button type="success" size="small" leftIcon="m-icon-home">主页</m-button></span> 
				<span><m-button type="danger"  size="mini" rightIcon="m-icon-calendar">日历</m-button></span> 
				<span><m-button type="warning" round leftIcon="m-icon-upload">上传</m-button></span> 
				<span><m-button type="dashed" round rightIcon="m-icon-search">搜索</m-button></span>
				<span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437">删除</m-button></span>
			</div>
			<div class="items-last">
				<span><m-button leftIcon="m-icon-electronics"></m-button></span>  
				<span><m-button type="primary" size="small" leftIcon="m-icon-edit"></m-button></span>
				<span><m-button type="success" size="mini" leftIcon="m-icon-add-circle"></m-button></span> 
				<span><m-button type="danger" round leftIcon="m-icon-home"></m-button></span> 
				<span><m-button type="warning" round leftIcon="m-icon-calendar"></m-button></span> 
				<span><m-button type="dashed" round leftIcon="m-icon-upload"></m-button></span>
				<span><m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"></m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button leftIcon="m-icon-complete"&gt;按钮&lt;/m-buttonn&gt; 
&lt;m-button type="primary" size="small" leftIcon="m-icon-add-circle"&gt;添加&lt;/m-button&gt; 
&lt;m-button type="success" leftIcon="m-icon-home"&gt;主页&lt;/m-button&gt; 
&lt;m-button type="danger" rightIcon="m-icon-calendar"&gt;日历&lt;/m-button&gt; 
&lt;m-button type="warning" leftIcon="m-icon-upload"&gt;上传&lt;/m-button&gt; 
&lt;m-button type="dashed" rightIcon="m-icon-search"&gt;搜索&lt;/m-button&gt; 
&lt;m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"&gt;删除&lt;/m-button&gt;  

&lt;m-button icon="m-icon-electronics"&gt;&lt;/m-buttonn&gt; 
&lt;m-button type="primary" size="small" icon="m-icon-edit"&gt;&lt;/m-button&gt; 
&lt;m-button type="success" size="mini" icon="m-icon-add-circle"&gt;&lt;/m-button&gt; 
&lt;m-button type="danger" round icon="m-icon-date-home"&gt;&lt;/m-button&gt; 
&lt;m-button type="warning" round icon="m-icon-calendar"&gt;&lt;/m-button&gt; 
&lt;m-button type="dashed" round icon="m-icon-upload"&gt;&lt;/m-button&gt; 
&lt;m-button type="text" icon="m-icon-ashbin" style="color:#ec3437"&gt;&lt;/m-button&gt;  
				</code>
			</pre>
		</div>
		<c-title ctitle="加载状态" ctips="正在加载中的状态按钮——通过 loading 和 leftIcon 或者 rightIcon 属性设置实现并确定icon出现的位置"></c-title>
		<block>
			<div class="items-last">
				<span><m-button round localing disabled leftIcon="m-icon-loading1">加载中</m-button></span>  
				<span><m-button type="primary" round leftIcon="m-icon-loading2" localing>加载中</m-button></span>
				<span><m-button type="success" disabled leftIcon="m-icon-loading3" localing>加载中</m-button></span> 
				<span><m-button type="danger" rightIcon="m-icon-loading4" localing>加载中</m-button></span> 
				<span><m-button type="warning" rightIcon="m-icon-loading5" localing>加载中</m-button></span> 
				<span><m-button type="text" leftIcon="m-icon-loading6" localing>加载中</m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button round localing disabled leftIcon="m-icon-loading1"&gt;加载中&lt;/m-buttonn&gt; 
&lt;m-button type="primary" round leftIcon="m-icon-loading2" localing&gt;加载中&lt;/m-button&gt; 
&lt;m-button type="success" disabled leftIcon="m-icon-loading3" localing&gt;加载中&lt;/m-button&gt; 
&lt;m-button type="danger" rightIcon="m-icon-loading4" localing&gt;加载中&lt;/m-button&gt; 
&lt;m-button type="warning" rightIcon="m-icon-loading5" localing&gt;加载中&lt;/m-button&gt; 
&lt;m-button type="text" leftIcon="m-icon-loading6" localing&gt;加载中&lt;/m-button&gt;  
				</code>
			</pre>
		</div>
		<c-title ctitle="自定义颜色" ctips="可以自定义颜色的按钮类型——通过 customColor 属性设置实现。 tips：需要注意的是type为 default、dashed、text 类型的按钮不支持自定义"></c-title>
		<block>
			<div class="items-last">
				<span><m-button>默认按钮不支持</m-button></span>
				<span><m-button type="dashed">虚线按钮不支持</m-button></span>
				<span><m-button type="text">文本按钮不支持</m-button></span>  
				<span><m-button type="custom" customColor="#9935f5">自定义颜色</m-button></span>
				<span><m-button type="custom" customColor="#1ba7dd">自定义颜色</m-button></span> 
				<span><m-button type="custom" round customColor="#d33cc7">自定义颜色</m-button></span> 
				<span><m-button type="custom" round customColor="#0008ff"  leftIcon="m-icon-loading6" localing disabled>自定义颜色</m-button></span>
			</div>
		</block>
		<div v-highlight class="codeDiv">
			<pre>
				<code>
&lt;m-button type="custom" customColor="#9935f5"&gt;自定义颜色&lt;/m-button&gt; 
&lt;m-button type="custom" customColor="#1ba7dd"&gt;自定义颜色&lt;/m-button&gt; 
&lt;m-button type="custom" round customColor="#d33cc7"&gt;自定义颜色&lt;/m-button&gt; 
&lt;m-button type="custom" round customColor="#0008ff"  icon="m-icon-spinner6" localing disabled&gt;自定义颜色&lt;/m-button&gt;
				</code>
			</pre>
		</div>
		<c-title ctitle="Attributes" ctips="参数选项"></c-title>
		<m-table :options="options">
      <template #id="item">
        <div style="margin:0">{{item.scope.row.id}}</div>
      </template>
      <template #action>
        <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
        <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
      </template>
    </m-table>
		<div style="margin-bottom:30px"></div>
	</div>
	<div class="cTtitle"></div>
</template>
<script setup>
	import {reactive} from 'vue'
	import mTitle from '@/components/mtitle.vue'
	import cTitle from '@/components/ctitle.vue'
	import block from '@/components/block.vue'
	const state = reactive({
		options:{
			fileds:[
				{
					field:'attr',
					title:'参数',
					align:'center'
				},
				{
					field:'type',
					title:'类型',
					align:'center'
				},
				{
					field:'red',
					title:'说明',
					align:'center',
					width:'350px'
				},
				{
					field:'sel',
					title:'可选值',
					align:'center'
				},
				{
					field:'def',
					title:'默认值',
					align:'center'
				}
			],
			datas:[
				{attr:'type',type:'String',red:'按钮类型',sel:'default / primary / success / danger / warning / dashed / text / custom',def:"default"},
				{attr:'size',type:'String',red:'按钮尺寸',sel:'default / medium / small / mini',def:"default"},
				{attr:'round',type:'Boolean',red:'是否为圆角类型的按钮',sel:'true / false',def:"false"},
				{attr:'disabled',type:'Boolean',red:'是否为禁用状态的按钮',sel:'true / false ',def:"false"},
				{attr:'customColor',type:'String',red:'type 为 custom 时自定义按钮的颜色色值。需要注意的是type为 default、dashed、text 类型的按钮不支持',sel:'——',def:"——"},
				{attr:'localing',type:'Boolean',red:'是否为加载状态的按钮，加载状态的icon仅支持这六个(m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6)，通过 leftIcon / rightIcon 参数配置并确定位置',sel:'true / false ',def:"false"},
				{attr:'leftIcon',type:'String',red:'决定按钮类型为图标按钮，并且icon展示在左侧',sel:'参考图标库',def:"——"},
				{attr:'rightIcon',type:'String',red:'决定按钮类型为图标按钮，并且icon展示在右侧',sel:'参考图标库',def:"——"}
			]
		}
	})
	const {options} = state
</script>
<style scoped lang="scss">
.buttonsBox{
	
}
span{
	margin-right:12px;
}
</style>