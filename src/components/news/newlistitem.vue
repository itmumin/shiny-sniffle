<template>
    <div class="item-container">
        <h3>{{ msg.title }}</h3>
        <div class="content" v-html="msg.content"></div>
        <div class="comment">
            <comment-box></comment-box>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
import comment from "../subcomponents/comment.vue"
export default {
    data() {
        return {
            id: this.$route.params.id,
            msg: ''
        }
    },
    created() {
        this.getDate()
    },
    methods: {
        getDate() {
            var id = this.id
            this.$http.get('http://localhost:81/src/lib/data/news/newslistitem.json').then(data => {
                if(data.body.status == 0) {
                    this.msg = data.body.message[id]
                }
            }, err => {
                Toast("新闻详细获取失败")
            })
        }
    },
    components: {
        commentBox: comment
    }
}
</script>
<style lang="less">
    .item-container {
        padding: 5px;
        h3 {
            color: red;
        }
    }
</style>
