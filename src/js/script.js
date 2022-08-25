// var vm = new Vue({
//     el:'#app',
//     data:{
//         url: 'http://localhost:3000/posts',
//         data: {
//             list:{}
//         }
//     },
//     created: function(){
//         this.getData()
//     },
//     methods:{
//         getData(){
//             fetch(this.url).then(response => {
//                 this.list =response.json()
//                 console.log(this.list)
//             }, error =>{
//                 console.log(error)
//             })
//         }
//     },
// })

/*
-lay du lieu truoc
-day du lieu vao vue -> data: {}
*/ 


const getData = async function(){
    const response = await fetch("http://localhost:3000/posts")
    const data = await response.json()
    new Vue({
        el:'#app',
        data: {
          test: data
        },
        methods: {
        },
        created: function(){
        },
      });

      
}

getData()