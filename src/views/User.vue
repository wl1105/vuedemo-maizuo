<template>
    <div>
        <h1>用户页，欢迎</h1>
        <router-view></router-view>
        <router-link to="/user/profile">UserProfile</router-link><br/>
        <router-link to="/user/posts">UserPosts</router-link>
    </div>
</template>
