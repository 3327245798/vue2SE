<template>
  <div class="total" id="total">
  <el-button @click="renderList()">长出table</el-button>
  </div>
</template>

<script>
import userInfoOject from '../../mock/userInfo2.json'

export default {
    data(){
        return{
            userList:userInfoOject.userList
        }
    },
    methods:{
        getList(){
            return this.userList;
        },
        async renderList(){
            
            const list = await this.getList()
            //分页后，数据可以快速渲染到屏幕上，减少页面的空白时间。
            const total=list.length
            const page=0
            const limit=200
            const totalPage=Math.ceil(total/limit)

            const render=(page)=>{
                if(page>=totalPage)return
                setTimeout(()=>{
                    const container=document.getElementById("total");
                    for(let i=page*limit;i<page*limit+limit;i++){
                        const item=list[i]
                        const div=document.createElement('div')
                        div.className=`sunshein`
                        div.innerHTML=`<span>${item.name}</span>`
                        container.appendChild(div)
                    }  
                    render(page+1)       
                },0)
            } 
                render(page)
        }
    },
    mounted(){

    }


}
</script>

<style>

</style>