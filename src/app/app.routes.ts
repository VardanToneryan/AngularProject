import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './Components/category/category.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PravacyPolicyComponent } from './pages/pravacy-policy/pravacy-policy.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog-post',
        component: BlogPostComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'pravacy-policy',
        component: PravacyPolicyComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
      }
];
