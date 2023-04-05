const posts = [
    {title:"Post One", body:"This is post one"},
    {title:"Post Two", body:"This is post two"}
];
const users = {
    username:"Hrishikesh",
    lastActivityDate:"22nd of Mar"
}

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post, index)=>{
            output+=`<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
           
            var error = false;

            if(!error){
                resolve();
            }else{
                reject("Error something went worng");
            }
        }, 2000);
    });

    
}
function updateLastUserActivity(users){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(users){
                users.lastActivityDate = new Date().getTime();
            resolve(users.lastActivityDate)}else{
                reject("Error");
            }
        },1000);
    })
}

function updateUserPost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivity()])
    .then(([createPostResolves, updateLastUserActivityResolves])=>{
        console.log(updateLastUserActivityResolves);
    })
    .catch(err=>console.log(err));
}


createPost({title:"Post Three", body:"This is post Three"})
.then(getPosts)
.catch(er=>console.log(er))
.then(updateLastUserActivity)
.then(updateUserPost);
