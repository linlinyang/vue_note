<template>
    <div :class="[styles.button,styles.global_button]">
        <span>按钮</span>
    </div>
</template>

<script>
import styles from './index.less';
console.log(styles);
export default {
    name: 'Login',
    data(){
        return {
            styles
        };
    }
}
</script>


