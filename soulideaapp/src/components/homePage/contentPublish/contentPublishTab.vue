<template>
    <div class="publish_top">
        <div>
            <p><em>标题</em><input type="text" placeholder="快给作品取个名字吧"></p>
            <div><textarea name="" placeholder="想点说什么..." id="" ></textarea></div>
        </div>
        <div></div>
    </div>
</template>
<style>
.publish_top {
  background: white;
  width: 100%;
  height: 2.9rem;
  margin-top: 1rem;
}
.publish_top > div > p {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.publish_top > div > p > em {
  font-style: normal;
  margin: 0 0.25rem;
}
.publish_top > div > p > input {
  width: 6.23rem;
  height: 0.8rem;
  border: 0px;
  outline: none;
  cursor: pointer;
  background: #f8f8f8;
}
.publish_top > div > div {
  margin-top: 0.1rem;
  border-top:5px solid #ccc;
  border-bottom:5px solid #ccc;
}
.publish_top > div > div textarea {
  overflow: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  border-style: solid;
  border-color: #ffffff;
  width:100%; 
  height:1.8rem;
  resize:none;
  background:#f8f8f8;
}
</style>
<script>
export default {};
</script>
