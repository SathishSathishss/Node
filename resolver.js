
const students= [
    {id:'1',name:'saran', jobtitle:'Explore Nature'},
    {id:'2',name:'mal', jobtitle:'Engineer'}
];

const resolvers={
    Query:{
        students:()=>students
    }
};

module.exports=resolvers;