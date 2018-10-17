import details from '@/views/blog/Detail.vue'
import list from '@/views/blog/Topic.vue'
import ownPages from '@/views/blog/OwnPage.vue'


export default [
    {path: 'details', component: details},
    // {path: 'list', component: topic},
    {
        path:'ownPage',
        component:ownPages
    }
]